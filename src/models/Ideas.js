const { Schema, model } = require("mongoose");

const ideasSchema = new Schema({
  ideaId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
  additionalInfo: String,
  documents: String,
});

const Ideas = model("ideas", ideasSchema);

module.exports = Ideas;
