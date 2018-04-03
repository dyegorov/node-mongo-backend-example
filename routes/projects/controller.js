const fs = require('fs'),
  path = require('path');

const mkdirSync = function (dirPath, res) {
  try {
    fs.mkdirSync(dirPath)
  } catch (err) {
    if (err.code !== 'EEXIST') {
      res.status(500);
      res.send({ message: "Couldn't create directory " + dirPath }, err);
    }
  }
}

const projectController = Project => {
  const create = (req, res) => {
    let id;
    req.body.id ?
      id = req.body.id :
      id = (+new Date).toString(36);
    mkdirSync(path.resolve('./uploads/projects'));
    mkdirSync(path.resolve('./uploads/projects/' + id));
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

  const getAll = (req, res) => {
    Project.find({}, (err, projects) => {
      if (err) {
        res.status(500);
        res.send({message: "Couldn't find any projects", err});
      } else {
        res.status(200);
        res.json(projects);
      }
    });
  }

  const updateById = (req, res) => {
    let id = req.params.projectId;
    let updateObj = {};
    if (req.body.titleRu && req.body.titleEn) {
      updateObj.titleRu = req.body.titleRu;
      updateObj.titleEn = req.body.titleEn;
    }
    if (req.body.descRu && req.body.descEn) {
      updateObj.descRu = req.body.descRu;
      updateObj.descEn = req.body.descEn;
    }
    if (req.body.isVisible) {
      updateObj.isVisible = req.body.isVisible;
    }
    if (req.files) {
      let file = req.files.img;
      let fileName = Date.now().toString() + '_' + file.name;
      file.mv('./uploads/projects/' + id + '/' + fileName, err => {
        if (err) {
          res.status(500);
          res.send({message: "Saving file failed", err});
        } else {
          updateObj.imgFileName = fileName;
          Project.findOneAndUpdate({ id }, updateObj, {new: true}, (err, project) => {
            if (err) {
              res.status(500);
              res.send({message: "Update failed", err});
            } else {
              res.status(200);
              res.json(project);
            }
          });
        }
      });
    } else {
      Project.findOneAndUpdate({ id }, updateObj, {new: true}, (err, project) => {
        if (err) {
          res.status(500);
          res.send({message: "Update failed", err});
        } else {
          res.status(200);
          res.json(project);
        }
      });
    }
  }

  return { create, getAll, updateById };
}

module.exports = projectController;