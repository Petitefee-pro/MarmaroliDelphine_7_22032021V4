const sql = require('../models/db');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//Création du profil utilisateur
exports.signup = (req, res, next) => {
    if (!req.body) {
        res.status(400).send({
            message: "Le contenu ne peut pas être vide!"
        });
    } else {
        console.log(req.body);
        if (sql.query(`SELECT * FROM users WHERE identifiant = ${req.body.identifiant}`)) {
            console.log("if");
            bcrypt.hash(req.body.password, 10)
                .then(hash => {
                    console.log("ok");
                    console.log(user);
                    user.updateById(                        
                        req.params.identifiant,
                        new User({
                            pseudo: req.body.pseudo,
                            email: req.body.email,
                            password: hash
                        }),
                        (err, data) => {
                            if (err) {
                                if (err.kind === "non trouvé") {
                                    res.status(404).send({
                                        message: `Utilisateur non trouvé avec identifiant ${req.params.identifiant}.`
                                    });
                                } else {
                                    res.status(500).send({
                                        message: "Erreur lors de la mise à jour du client avec l'identifiant " + req.params.identifiant
                                    });
                                }
                            } else {
                                res.send(data);
                            }
                        }
                    )
                    
                })
                .catch(error => res.status(500).json({ message: 'error 500' }) );
        } else {
            return res.status (401).json({ error : 'Utilisateur non trouvé !' })
        }
    }
};
//Connection au profil utilisateur
exports.login = (req, res, next) => {
    User.findById(this.identifiant, (err, data) => {        
        if (err) {
          if (err.kind === "non trouvé") {
            res.status(404).send({
              message: `Utilisateur non trouvé avec identifiant ${this.identifiant}.`
            });
          } else {
            res.status(500).send({
              message: "Erreur lors de la récupération de l'utilisateur avec l'ID" + this.identifiant
            });
          }
        } else res.send(data);
      });
};
/*exports.signup = (req, res, next) => {
    console.log(req.body)
    if (!req.body) {
        res.status (400).send({
            message: 'Création de profil impossible'
        });
    } else {
        if (sql.query(`SELECT * FROM users WHERE identifiant = identifiant`)) {
            bcrypt.hash(req.body.password, 10)
                .then(hash => {
                    console.log("ok");
                    const user = new User({
                        identifiant: req.body.identifiant,
                        pseudo: req.body.pseudo,
                        email: req.body.email,
                        password: hash
                    });
                    user.updateById()
                        .then(() => res.status(201).json({message: 'Utilisateur créé !'}))
                        .catch((error) => res.status(400).json({ error }));
                    console.log(user);
                })
                .catch(error => res.status(500).json({ error }) );
        } else {
            return res.status (401).json({ error : 'Utilisateur non trouvé !' })
        }
    }
};

//Connection au profil utilisateur
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if(!user) {
                return res.status(401).json({ error : 'Utilisateur non trouvé !' });
            }
            user.compare(req.body.password, user.password)
        })
        User.login(req.params.idUser, (err, data) => {
        if (err) {
            if(err.kind === "non trouvé") {
                res.status(404).send({
                    message: `Utilisateur non trouvé avec l'identifiant ${req.params.idUser}.`
                });
            } else {
                res.status(500).json({
                   error
                });
            }
        } else {
            res.send(data);
        }
    });
};

/*const User = require('../models/user');

//Création d'un profil utilisateur
exports.signup = (req, res, next) => {
    .then((user) => {
        User.create = (newUser, result) => {
        sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
            if (err) {
            console.log("error")
            result(err, null);
            return;
            }
            console.log("Utilisateur créé: ", { id: res.insertId, ...newUser });
            result(null, { id: res.insertId, ...newUser });
        });
        
        };
    })
    .catch((error) => res.status(500).json({ error }));
};
//Connexion au profil utilisateur
exports.login = (req, res, next) => {
    .then((user) => {
    User.findById = (idUser, result) => {
        sql.query(`SELECT * FROM WHERE idUser = ${idUser}`, (err, res) => {
            if (err) {
                console.log('error: ', err);
                result(err, null);
                return;
            }
            if (res.length) {
                console.log('Utilisateur trouvé: ', res[0]);
                result(null, res[0]);
                return;
            }
            result({ kind: 'Utilisateur non trouvé !' }, null);
        });
    };
    })
    .catch((error) => res.status(500).json({ error }));
};*/
