const User = require('../models/user');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Création du profil utilisateur
exports.signup = (req, res, next) => {
    if (!req.body) {
        res.status (400).send({
            message: 'Création de profil impossible'
        });
    } else {
        if (sql.query(`SELECT * FROM WHERE identifiant = ${identifiant}`)) {
            bcrypt.hash(req.body.password, 10)
                .then(hash => {
                    const user = new User({
                    identifiant: req.body.identifiant,
                    email: req.body.email,
                    password: hash
                    });
                    User.signup()
                        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                        .catch(error => res.status(400).json({ error}));
                })
                .catch(error => console.log(error)/*res.status(500).json({ error }) */);
            /*User.signup(user, (err, data) => {
                if (err) {
                res.status(500).json({
                    error
                });
                } else {
                    res.send(data);                    
                }
            });console.log(user)*/
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
    /*User.login(req.params.idUser, (err, data) => {
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
    });*/
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

module.exports = User;