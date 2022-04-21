const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const chalk = require("chalk");
const path = require("path");

require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log(
    chalk.white.bgGreen("MongoDB database connection established successfully!")
  );
});

app.use("/api/notes", require("./routes/notes"));
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

app.use(express.static("build"));
app.get("*", (req, res) => res.sendFile(path.resolve("build", "index.html")));

app.listen(port, () => {
  console.log(
    chalk.white.bgYellow(
      "Server running on port " +
        port +
        "\nThe NODE_ENV is " +
        process.env.NODE_ENV
    )
  );
});
