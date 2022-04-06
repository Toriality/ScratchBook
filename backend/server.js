const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const chalk = require("chalk");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

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

app.use("/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(chalk.yellow.bgGreen("Server running on port " + port));
});
