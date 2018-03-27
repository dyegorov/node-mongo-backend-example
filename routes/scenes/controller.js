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
        res.send({ message: "Scene not found in db"});
      } else {
        res.status(200);
        res.json(scene);
      }
    })
  }

  return { createAbout, getAbout };
}

module.exports = sceneController;