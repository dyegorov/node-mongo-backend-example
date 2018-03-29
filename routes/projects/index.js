const router = require('express').Router(),
  model = require('./model'),
  project = require('./controller')(model);

router.route('/')
  .post(project.create);

module.exports = router;