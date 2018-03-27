const router = require('express').Router(),
  model = require('./model'),
  user = require('./controller')(model),
  passportService = require('../../services/passport'),
  passport = require('passport');

const requireLogin = passport.authenticate('local', { session: false });

router.route('/register').post(user.register);
router.route('/:userId').delete(user.remove);
router.route('/login').all(requireLogin).post(user.login);

module.exports = router;