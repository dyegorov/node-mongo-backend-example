const productController = Product => {
  const create = (req, res) => {
    let project = req.params.projectId;
    let id = (+new Date).toString(36);
    let product = new Product({ id, project });
    product.save((err, newProduct) => {
      if (err) {
        res.status(500);
        res.send({message: "Saving new product failed", err});
      } else {
        res.status(200);
        res.json(newProduct);
      }
    });
  }

  const getById = (req, res) => {
    let id = req.params.productId;
    Product.findOne({id}, (err, product) => {
      if (err) {
        res.status(200);
        res.send({message: "Product not found", err});
      } else {
        res.status(200);
        res.json(product);
      }
    })
  }

  const updateById = (req, res) => {
    let id = req.params.productId;
    let updateObj = {};
    if (req.body.titleRu && req.body.titleEn) {
      updateObj.titleRu = req.body.titleRu;
      updateObj.titleEn = req.body.titleEn;
    }
    if (req.body.isPublished) {
      updateObj.isPublished = req.body.isPublished;
    }
    if (req.body.isFavourite) {
      updateObj.isFavourite = req.body.isFavourite;
    }
    if (req.files) {
      let img4k = req.files.img4k;
      let imgFHD = req.files.imgFHD;
      let imgSD = req.files.imgSD;
    }
  }

  const uploadFile = file => {
    // return file.mv('.')
  }
  return { create, getById };
}

module.exports = productController;