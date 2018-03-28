const mongoose = require('mongoose');

const sceneSchema = mongoose.Schema({
  name: { type: String, required: true, index: true, unique: true },
  titleRu: { type: String },
  titleEn: { type: String },
  desc1Ru: { type: String },
  desc1En: { type: String },  
  desc2Ru: { type: String },
  desc2En: { type: String },
  members: { type: Array },  
  data: mongoose.Schema.Types.Mixed
});

module.exports = mongoose.model('Scene', sceneSchema);