const sql = require('../models/db');

const User = function(user){
    this.identifiant = user.identifiant,
    this.pseudo= user.pseudo,
    this.email = user.email,
    this.password = user.password
};

User.updateById = (user) => {
    console.log(user)
    sql.query(`UPDATE users SET pseudonyme = ?, email = ?, password = ? WHERE identifiant = ?`, 
    [user.pseudo, user.email, user.password, user.identifiant],
    (err, res) => {
        if (err){
            console.log("error: ", err);            
            return(err, null);
        }
        if(res.affectedRows == 0){         
            console.log('Utilisateur non trouvé !')
            return({ kind: 'Utilisateur non trouvé !' }, null);            
        } else{
            console.log('création profil : ', { identifiant: user.identifiant, ...user })
            return(res.status(200).json({ email: "ok" }), null);
        }
    });
};

User.findOne = (req, res) => {
    sql.query(`SELECT * FROM users WHERE email = ?`, req.body.email, function(error, _result, _fields){
        if (error){
            console.log(('échec'));
            return res.status(401).json({ error })            
        }
    }) 
    {
        if (err) {
            console.log('error: ', err);
            return(err, null);
        }
        if (res.length) {
            console.log('Utilisateur trouvé: ', res[0]);
            return(null, res[0]);
        }
        return({ kind: 'Utilisateur non trouvé !' }, null);
    };
};

module.exports = User;