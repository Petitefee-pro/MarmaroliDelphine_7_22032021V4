/*const sql = require('../models/db');*/
const forumModel = require('../models/forum');
/*const User =require('../models/user');*/

//Suppression d'un forum
exports.deleteForum = (req, res) => {
  forumModel.deleteForum(req.params.idForum, (err, forum) => {
    if(err)
    res.send(err);
    res.json({ success: true, message: 'Forum supprimé avec succès' });
  })
};

//Création d'un nouveau forum
exports.createForum =(req, res) => {
  /*const texte = req.body.message.post;
  const pseudo = req.body.message.pseudo;
  const post = new forumModel(texte, pseudo);
  console.log(post);
  console.log(pseudo);
  console.log(texte);
  post.insertPost();*/
  console.log(req.body.message);
  const forumReqData = (req.body.message.post);
  console.log(forumReqData);
  if(req.body.message.post.constructor === Object && Object.keys(req.body.message.post).length === 0){
    res.send(400).send({success: false, message: 'Veuillez remplir un champs'});
  } else {
    console.log("Valeur valide");    
    forumModel.createForum(forumReqData, (err, forum) =>{
      if (err)
      res.send(err);
      res.json({status: true, message: 'Forum créé avec succès', data: forum.insertId}) 
    })
  }
};

//Récupération de tous les forums
exports.getAllForums = (req, res) => {
  console.log('Ici tous les posts');
  forumModel.getAllForums((err, forum) =>{
    console.log('Ici récupération de tous les post de la base de données');
    if (err)
    res.send(err);
    console.log('Forums', forum);
    res.send(forum);
  })
};

//Récupération d'un forum avec l'id
exports.getOneForum = (req, res) => {
  console.log('Ici un post par son id');
  forumModel.getOneForum(req.params.idForum, (err, forum) =>{
    if (err)
    res.send(err);
    console.log('Forum par id', forum);
    res.send(forum);
  })
};

/*exports.createForum = async function (req, res) {    
    
      //Création d'un forum    
      const post = req.body.post;
      console.log(req.body)
      console.log(post);
    
      //Sauvegarde d'un forum dans la base de données
      Forum.create(forum, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Une erreur s'est produite lors de la création du forum."
          });
        else res.send(data);
      });
   
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

//Récupération de tous les forums
exports.getAllForum = (req, res) => {
    console.log('Ici tous les posts');
    Forum.getAll((err, forum) =>{
      console.log('Ici récupération de tous les post de la base de données');
      if (err)
      res.send(err);
      console.log('Forums', forum);
      res.send(forum);
    })
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
  console.log('Ici, un seul post')
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
};*/
