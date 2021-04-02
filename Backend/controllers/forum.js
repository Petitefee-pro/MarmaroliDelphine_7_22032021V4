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
      const forum = new Forum({
        contenuText: req.body.contenuText,
        contenuImage: req.body.contenuImage,
        contenuDate: req.body.contenuDate,
        /*pseudo: req.body.pseudo*/
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
      }
    
      //Modification d'un forum
      Forum.updateById(
        req.params.idforum,
        new Forum(req.body),
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