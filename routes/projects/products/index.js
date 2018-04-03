const router = require('express').Router({mergeParams: true}),
  model = require('./model'),
  product = require('./controller')(model);

router.route('/').post(product.create);
router.route('/:productId').get(product.getById);

module.exports = router;