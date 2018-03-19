const router = require('express').Router(),
  model = require('./model'),
  user = require('./controller')(model);

router.route('/').post(user.register);

module.exports = router;