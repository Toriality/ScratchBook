const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlenght: 3,
    },
    desc: {
      type: String,
      required: true,
      unique: false,
      minlenght: 3,
      maxlenght: 1024,
    },
    private: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;
