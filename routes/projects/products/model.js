const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  id: {type: String, required: true },
  titleRu: String,
  titleEn: String,
  project: String,
  isPublished: { type: Boolean, default: false },
  isFavourite: { type: Boolean, default: false },
  img4k: String,
  imgFHD: String,
  imgSD: String
});

module.exports = mongoose.model('Product', productsSchema);