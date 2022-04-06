const router = require("express").Router();
const chalk = require("chalk");
let Note = require("../models/Notes");

router.route("/").get((req, res) => {
  Note.find()
    .then((notes) => {
      res.json(notes);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const private = req.body.private;
  const newNote = new Note({
    title,
    desc,
    private,
  });

  newNote
    .save()
    .then(() => {
      res.json("Note added");
      Note.find().then((notes) => {
        console.log(
          `${chalk.white.bgGreen(" ! ")} : Note with title "${
            notes[notes.length - 1].title
          }" has been added with the ID ${notes[notes.length - 1]._id}`
        );
      });
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

router.route("/id/:id").delete((req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json("Note deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/id/:id").post((req, res) => {
  Note.findById(req.params.id).then((notes) => {
    notes.ttile = req.body.title;
    notes.desc = req.body.desc;
    notes
      .save()
      .then(() => res.json("Note updated"))
      .catch((err) => res.status(400).json("Error: " + err));
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
