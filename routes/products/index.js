const router = require('express').Router(),
  multer = require('multer'),
  model = require('./model'),
  product = require('./controller')(model);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now().toString() + '_' + file.originalname)
  }
});

const upload = multer({ storage });
const uploadFields = upload.fields([
  { name: "img4k", maxCount: 1 },
  { name: "imgFHD", maxCount: "1" },
  { name: "imgSD", maxCount: 1 }
])

router.route('/').post(uploadFields, product.create);

module.exports = router;