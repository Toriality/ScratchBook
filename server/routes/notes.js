const router = require("express").Router();
const chalk = require("chalk");
let Note = require("../models/Notes");
let User = require("../models/Users");
const auth = require("../middleware/auth");

router.route("/").get((req, res) => {
  Note.find({ private: "false" })
    .then((notes) => {
      res.json(notes);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/", auth, (req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const private = req.body.private;
  const user = req.user.id;
  const newNote = new Note({
    title,
    desc,
    private,
    user,
  });

  newNote
    .save()
    .then((note) => {
      console.log(`Note ID ${note.id} by user ${note.user} added!`);
      User.updateOne(
        { _id: note.user },
        {
          $push: { notes: note.id },
        },
        (err, res) => console.log(err, res)
      );
      res.send(note);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
      console.log(err);
    });
});

router.route("/id/:id").get((req, res) => {
  Note.findById(req.params.id)
    .then((note) => res.json(note))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/id/:id", auth, (req, res) => {
  Note.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
});

router.patch("/id/:id", auth, (req, res) => {
  Note.updateOne({ _id: req.params.id }, req.body, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
});

router.route("/find_last").get((req, res) => {
  Note.find({})
    .sort({ _id: -1 })
    .limit(1)
    .then((notes) => {
      res.json(notes);
    });
});

module.exports = router;
