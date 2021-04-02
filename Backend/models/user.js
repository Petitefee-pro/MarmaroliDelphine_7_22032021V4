const sql = require('../models/db');

const User = function(user){
    this.identifiant = user.identifiant,
    this.pseudo= user.pseudo,
    this.email = user.email,
    this.password = user.password
};

User.updateById = (req, res) => {
    console.log(identifiant,user)
    sql.query(`UPDATE users SET pseudonyme = ?, email = ?, password = ? WHERE identifiant = ?`, 
    req.body.pseudo, req.body.email, req.body.password, req.body.identifiant,
    (err, res) => {
        if (err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if(res.affectedRows == 0){
            result({ kind: 'Utilisateur non trouvé !' }, null);
            return;
        }
        console.log('création profil : ', { id: identifiant, ...User })
        result(null, { identifiant: identifiant, ...user});
    });
};

User.findOne = (req, res) => {
    sql.query(`SELECT * FROM users WHERE email = email`, (err, res) => {
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