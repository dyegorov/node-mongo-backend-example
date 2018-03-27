const router = require('express').Router(),
  model = require('./model'),
  scene = require('./controller')(model);

router.route('/about').post(scene.createAbout);

module.exports = router;