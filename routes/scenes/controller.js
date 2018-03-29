const sceneController = Scene => {
  const createAbout = (req, res) => {
    let about = new Scene({ name: req.body.name });
    about.save((err, scene) => {
      if (err) {
        res.status(500);
        res.send({ message: "Scene saving failed", err });
      } else {
        res.status(200);
        res.send({ id: scene._id, name: "about" });
      }
    })
  }

  const getAbout = (req, res) => {
    Scene.find({ name: "about" }, (err, scene) => {
      if (err) {
        res.status(400);
        res.send({ message: "Scene not found in db" });
      } else {
        res.status(200);
        res.json(scene);
      }
    })
  }

  const updateAbout = (req, res) => {
    if (req.body.titleRu && req.body.titleEn) {
      findAndUpdate({ titleRu: req.body.titleRu, titleEn: req.body.titleEn }, res);
    }
    if (req.body.desc1Ru && req.body.desc1En) {
      findAndUpdate({ desc1Ru: req.body.desc1Ru, desc1En: req.body.desc1En }, res);
    }
    if (req.body.desc2Ru && req.body.desc2En) {
      findAndUpdate({ desc2Ru: req.body.desc2Ru, desc2En: req.body.desc2En }, res);
    }
    if (req.body.membersRu && req.body.membersEn) {
      findAndUpdate({ membersRu: req.body.membersRu, membersEn: req.body.membersEn }, res);
    }
    if (req.files.img[0]) {
      findAndUpdate({ imgFileName: req.files.img[0].filename}, res);
    }
  }

  const findAndUpdate = (updateObj, res) => {
    Scene.findOneAndUpdate({ name: "about" },
      updateObj,
      { new: true },
      (err, scene) => {
        if (err) {
          res.status(400);
          res.send({ message: "Scene not found in db" });
        } else {
          res.status(200);
          res.json(scene);
        }
      });
  };

  return { createAbout, getAbout, updateAbout };
}

module.exports = sceneController;