const router = require('express').Router(),
  model = require('./model'),
  cart = require('./controller')(model),
  passportService = require('../../services/passport'),
  passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});

router.route('/').all(requireAuth).get(cart.show);

module.exports = router;