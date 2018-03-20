const router = require('express').Router(),
  model = require('./model'),
  user = require('./controller')(model);

router.route('/').post(user.register);
router.route('/:userId').delete(user.remove);

module.exports = router;