const fs = require('fs'),
  path = require('path');

const mkdirSync = function (dirPath) {
  try {
    fs.mkdirSync(dirPath)
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
}

const projectController = Project => {
  const create = (req, res) => {
    let id;
    req.body.id ?
      id = req.body.id :
      id = (+new Date).toString(36);
    let project = new Project({ id });
    project.save((err, newProject) => {
      if (err) {
        res.status(500);
        res.send({ message: "Project creation failed", err });
      } else {
        res.status(200);
        res.send({ id: newProject.id });
      }
    });
  }

  return { create };
}

module.exports = projectController;