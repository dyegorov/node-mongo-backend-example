const router = require('express').Router(),
  model = require('./model'),
  project = require('./controller')(model),
  products = require('./products');

router.route('/')
  .get(project.getAll)
  .post(project.create);

router.route('/:projectId')
  .put(project.updateById);

router.use('/:projectId/products', products);

module.exports = router;