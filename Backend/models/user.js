const sql = require('../models/db');

 const User = class {
    constructor(identifiant, pseudonyme, email, password){
    this.identifiant = user.identifiant
    this.pseudonyme = user.pseudonyme
    this.email = user.email
    this.password = user.password
};


signup(){
    sql.query("UPDATE users SET pseudonyme = ?, email = ?, password = ? WHERE identifiant = ${this.identifiant} ?", { ...this }, (err, res) => {
        if (err) {
        console.log("error")
        result(err, null);
        return;
        }
        console.log("Utilisateur créé: ", { id: res.insertId, ...this });
        result(null, { id: res.insertId, ...this });
    });    
};

login(idUser){
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
}
module.exports = User;