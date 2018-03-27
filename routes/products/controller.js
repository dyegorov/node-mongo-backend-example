const productController = Product => {
  const create = (req, res) => {
    if (!req.body.title.ru) {
      res.status(400);
      res.send({ message: "Russian title is required" });
    } else if (!req.body.title.en) {
      res.status(400);
      res.send({ message: "English title is required" });
    } else if (!req.body.category) {
      res.status(400);
      res.send({ message: "Category is required"});
    } else {
      let product = new Product(req.body);
      product.save((err, product) => {
        if (err) {
          res.status(500);
          res.send({ message: "Saving to db failed"});
        } else {
          res.status(200);
          res.send({ id: product._id });
        }
      })
    }
  }
  return {};
}

module.exports = productController;