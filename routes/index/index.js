const router = require('express').Router();

router.route('/').get((req, res) => {
  res.send('root route reached');
});

module.exports = router;