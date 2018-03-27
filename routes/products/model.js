const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  title: {
    ru: { type: String, required: true },
    en: { type: String, required: true }
  },
  category: { type: String, required: true },
  isPublished: Boolean, default: false,
  isFavourite: Boolean, default: false,
  img4k: String,
  imgFHD: String,
  imgSD: String
});

module.exports = mongoose.model('Product', productsSchema);