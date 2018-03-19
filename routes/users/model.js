const mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
  login: { type: String, index: true, unique: true, required: true },
  password: { type: String, required: true },
  registeredAt: Date,
  tokenAt: Date,
  token: String
});

userSchema.methods.comparePassword = function(candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return next(err); }

    next(null, isMatch);
  })
}

module.exports = mongoose.model('User', userSchema);