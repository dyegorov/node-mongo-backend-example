const router = require('express').Router(),
  multer = require('multer'),
  model = require('./model'),
  scene = require('./controller')(model);

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now().toString() + '_' + file.originalname)
    }
  });
  
  const upload = multer({ storage });
  const uploadAbout = upload.fields([
    { name: "img", maxCount: 1 }
  ]);  

router.route('/about')
  .post(scene.createAbout)
  .get(scene.getAbout)
  .put(uploadAbout, scene.updateAbout);

module.exports = router;