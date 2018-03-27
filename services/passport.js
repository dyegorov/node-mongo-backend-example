const passport = require('passport');
const User = require('../routes/users/model');
const config = require('config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const localOptions = { usernameField: 'login' };
const localLogin = new LocalStrategy(localOptions, function (login, password, done) {
  User.findOne({ login }, function (err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false, {message: "User not found"}); }

    user.comparePassword(password, function (err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false, {message: "Incorrect password"}); }

      return done(null, user);
    });
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  User.findById(payload.sub, function (err, user) {
    if (err) {
      console.log('Auth error');
      return done(err, false);
    }

    if (user) {
      done(null, user);
    } else {
      console.log('Failed auth');
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);