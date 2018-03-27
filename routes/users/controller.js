const userController = User => {
  const register = (req, res) => {
    if (!req.body.login) {
      res.status(400);
      res.send({ err: "Login is required" });
    } else if (!req.body.password) {
      res.status(400);
      res.send({ err: "Password is required" });
    } else {
      let login = req.body.login;
      User.findOne({ login }, (err, user) => {
        if (err) {
          res.status(500);
          res.send("Login error:" + err);
        } else {
          if (user) {
            res.status(400);
            res.send(`Login "${login}" already taken :(`);
          } else {
            let user = new User(req.body);
            user.save((err, user) => {
              if (err) {
                res.status(500);
                res.send(`Saving user "${login}" failed :(`);
              } else {
                res.status(200);
                res.send({ _id: user._id, login: user.login });
              }
            })
          }
        }
      });
    }
  }

  const login = (req, res) => {
    res.send("Login route reached");
  }

  const remove = (req, res) => {
    let userId = req.params.userId;
    User.findByIdAndRemove(userId, (error, result) => {
      if (error) {
        res.status(500);
        res.send({ message: "User remove error", error });
      } else {
        if (result) {
          res.json({ message: `User ${userId} removed`, result });
        } else {
          res.send({ message: "User not found" });
        }
      }
    });
  }

  return { register, login, remove };
}

module.exports = userController;