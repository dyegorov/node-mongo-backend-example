const sceneController = Scene => {
  const createAbout = (req, res) => {
    if (!req.body.name) {
      res.status(400);
      res.send({ message: "Scene name is required" })
    } else {
      let about = new Scene({ name: req.body.name });
      about.save((err, scene) => {
        if (err) {
          res.status(500);
          res.send({ message: "Scene saving failed", err });
        } else {
          res.status(200);
          res.send({ id: scene._id, name: scene.name });
        }
      })
    }
  }
  return { createAbout };
}

module.exports = sceneController;