const sql = require('./db');
const mysql = require('mysql');

const User = function(user){
    this.identifiant = user.idUser;
    this.pseudo = user.pseudonyme, require;
    this.email = user.email, require;
    this.password = user.password, require;
};

User.signup = (newUser, result) => {
    sql.query("UPDATE users SET pseudonyme = ?, email = ?, password = ? WHERE identifiant = identifiant ?", { ...newUser }, (err, res) => {
        if (err) {
        console.log("error")
        result(err, null);
        return;
        }
        console.log("Utilisateur créé: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });    
};

User.login = (idUser, result) => {
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

module.exports = User;