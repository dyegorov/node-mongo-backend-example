const mongoose = require('mongoose');

const projectScheme = mongoose.Schema({
  id: { type: String, required: true, index: true, unique: true },
  titleRu: { type: String },
  titleEn: { type: String },
  descRu: { type: String },
  descEn: { type: String },
  isVisible: { type: Boolean },
  imgFileName: { type: String }
});

module.exports = mongoose.model("Project", projectScheme);