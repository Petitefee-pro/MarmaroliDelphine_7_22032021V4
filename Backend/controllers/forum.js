const sql = require('../models/db');
const Forum = require('../models/forum');
const User =require('../models/user');

exports.createForum = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Le contenu ne peut pas être vide!"
        });
    } else{
    
      //Création d'un forum
      const forumObject = JSON.parse(req.body.forum);
      delete forumObject.id;
      const forum = new Forum({
        ...forumObject,
        contenuImage: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      });
    
      //Sauvegarde d'un forum dans la base de données
      Forum.create(forum, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Une erreur s'est produite lors de la création du forum."
          });
        else res.send(data);
      });
    }
};

exports.modifyForum = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Le contenu ne peut pas être vide!"
        });
    } else{
    
      //Modification d'un forum
      const forumObject = req.file ?
        {
          ...JSON.parse(req.body.forum),
          contenuImage: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body }
      Forum.updateById(
        req.params.idforum,
        new Forum(forumObject),
        (err, data) => {
          if (err) {
            if (err.kind === "non trouvé") {
              res.status(404).send({
                message: `Forum non trouvé avec l'id ${req.params.idforum}.`
              });
            } else {
              res.status(500).send({
                message: "Une erreur s'est produite lors de la modification du forum" + req.params.idforum
              });
            }
          } else res.send(data);
        }
      );    
    }
};

exports.deleteForum = (req, res) => {
    
    //Suppression d'un forum
    Forum.remove(req.params.idforum, (err, data) => {
        if (err) {
          if (err.kind === "non trouvé") {
            res.status(404).send({
              message: `Forum non trouvé avec l'id ${req.params.idforum}.`
            });
          } else {
            res.status(500).send({
              message: "Impossible de supprimer le forum avec l'id " + req.params.idforum
            });
          }
        } else res.send({ message: `Le forum a été supprimé avec succès!` });
      });
};

exports.getAllForum = (req, res) => {
    Forum.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Une erreur s'est produite lors de la récupération des forums."
        });
      else res.send(data);
    });
};

exports.getOneForum = (req, res) => {
    Forum.findById(req.params.idForum, (err, data) => {
        if (err) {
          if (err.kind === "non trouvé") {
            res.status(404).send({
              message: `Le forum n'a pas été trouvé avec l'id ${req.params.idForum}.`
            });
          } else {
            res.status(500).send({
              message: "Erreur lors de la récupération du forum " + req.params.idForum
            });
          }
        } else res.send(data);
      });
};