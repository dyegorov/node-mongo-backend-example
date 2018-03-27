const mongoose = require('mongoose');

const sceneSchema = mongoose.Schema({
  name: { type: String, required: true, index: true, unique: true },
  data: Schema.Types.Mixed
});

module.exports = mongoose.model('Scene', sceneSchema);