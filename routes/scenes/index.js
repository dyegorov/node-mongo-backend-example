const router = require('express').Router(),
  model = require('./model'),
  scene = require('./controller')(model);

router.route('/about')
  .post(scene.createAbout)
  .get(scene.getAbout);

module.exports = router;