const router = require('express').Router(),
  multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
});

const upload = multer({ storage });

router.route('/').post(upload.single('img4k'), (req, res) => {
  console.log(req.file);
  res.send("post products reached");
})

module.exports = router;