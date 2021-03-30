const User = require('../models/user')
const mysql = require('mysql');

exports.create = (req, res, next) => {
    /*if (!req.body) {
        res.status (400).send({
            message: 'Création de profil impossible'
        });
    } else {*/
        if (sql.query(`SELECT * FROM WHERE identifiant = ${identifiant}`)) {
            const user = new User({
                identifiant: req.body.identifiant,
                email: req.body.email,
                mot_de_passe: req.body.mot_de_passe
            });

            User.create(user, (err, data) => {
                if (err) {
                res.status(500).json({
                    error
                });
                } else {
                    res.send(data);
                }
            });
        } else {
            return res.status (401).json({ error : 'Utilisateur non trouvé !' })
        }
    /*}*/
};

exports.findOne = (req, res, next) => {
    User.findById(req.params.idUser, (err, data) => {
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
};

module.exports = User;*/