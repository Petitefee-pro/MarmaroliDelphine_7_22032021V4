const sql = require('../models/db');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

//Création du profil utilisateur
exports.signup = (req, res, next) => {
    console.log(req.body);
    if(sql.query(`SELECT * FROM users WHERE identifiant = ?`, req.body.identifiant, function(error, _result, _fields){
        if (error){
            console.log(('échec'));
            return res.status(401).json({ error })            
        }
    })){
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                identifiant: req.body.identifiant,
                pseudo: req.body.pseudo,
                email: req.body.email,
                password: hash
            });
            console.log(user);
            User.updateById(user)
            /*return res.status(200).json({ email: "ok" });*/
        })
        .catch(error => res.status(500).json({ error }));
    }else{
        return res.status(401).json({ message : 'Utilisateur non trouvé !' })        
    }
};
//Connection au profil utilisateur
exports.login = async function(req, res, next){
    const pseudo = req.body.login.pseudo;
    const password = req.body.login.password;
    console.log(req.body);
    console.log(pseudo);
    console.log(password);
    if (pseudo && password){
        sql.query(`SELECT * FROM users WHERE pseudo = ?`, pseudo , function(error, results, fields) {
            if (!results || !(bcrypt.compare(password, results[0].password) )) {
				req.session.loggin = true;
				req.session.pseudo = pseudo;
                req.session.password = password;           
                        
                res.status(401).json({ 
                    message: 'Mot de passe incorrect !'                         
                })                                                         
            } else {
                const idUser = results[0].idUser;
                console.log('ok' + idUser);
                res.status(200).json({
                    token: jwt.sign(              
                    {idUser : idUser,
                    /*idDroit : idDroit*/},                  
                    '!UL+Z]wnKk-?v=Y8u5w.}M),D:m]}bqx+t724GQ[k@FR:m#])KvPS!?3vEb6JVSDTk/Yb+gu!-?hxB7cy%kHuy:_QqG+NF8FRv[QzuVE7$/?N;dBSthJ-z{B$hk?=SXmu!=6auH=dY[[{muwAec2N@FJERA:T8za)QF+@)e92Y)/X9f-FZ7Wx4yQyR5V[y%TPJD2.UedkG?7XZW}Qh.ruT.Z)f3Bc=jUETuvn_!HAM:E.TVWB#B4C9*g?7Q*:*Dg(f/V4Yq]puLBFN=&7/TcANT#C?7y]fnC&N!:)FC!Qa/.',
                    { expiresIn: '24h' },
                    )
               })
               console.log(idUser);
            }       
        });
    } else {
        res.send('Merci de rentrer un email et un mot de passe correctes !');
		res.end();
    }
};

//Suppression d'un profil utilisateur
exports.deleteUser = (req, res) => {
    User.deleteUser(req.params.idUser, (err, forum) => {
      if(err)
      res.send(err);
      res.json({ success: true, message: 'Profil utilisateur supprimé avec succès' });
    })
};

    /*const User = function(user){
        this.email = req.body.email,
        this.password = req.body.password
    };
    console.log(this.email);
    console.log(req.body);
    const requete = `SELECT * FROM users WHERE email = ?`;
    if(sql.query(requete, [email, password],  function select(error, results, fields){
        if (error) {
            console.log(error);   
            sql.end();
            return;
    }
    if (results.length > 0) {
        const firstResult = results[ 0 ];
        console.log('id: ' + firstResult['idUser']);
        console.log('email: ' + firstResult['email']);
        console.log('password: ' + firstResult['password']);
    } else {
        console.log("Pas de données");
    }
    sql.end();
    }
    );/*){
        bcrypt.compare(req.body.password, firstResult['password'])
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            console.log(user);
            return res.status(200).json({
                idUser: user.id,
                token: jwt.sign(
                    { idUser: user.id },
                    '!UL+Z]wnKk-?v=Y8u5w.}M),D:m]}bqx+t724GQ[k@FR:m#])KvPS!?3vEb6JVSDTk/Yb+gu!-?hxB7cy%kHuy:_QqG+NF8FRv[QzuVE7$/?N;dBSthJ-z{B$hk?=SXmu!=6auH=dY[[{muwAec2N@FJERA:T8za)QF+@)e92Y)/X9f-FZ7Wx4yQyR5V[y%TPJD2.UedkG?7XZW}Qh.ruT.Z)f3Bc=jUETuvn_!HAM:E.TVWB#B4C9*g?7Q*:*Dg(f/V4Yq]puLBFN=&7/TcANT#C?7y]fnC&N!:)FC!Qa/.',
                    { expiresIn: '24h' },
                ),
                email: "ok" 
            });          
        })
        .catch(error => res.status(500).json({ error }));
    }else{
        return res.status(401).json({ error : 'Utilisateur non trouvé !' })        
    }*/
      /*console.log(req.body)
    User.findOne({ email: req.body.email })
        console.log (email)
        
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: "Utilisateur non trouvé !" });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        idUser: user.id,
                        token: jwt.sign(
                            { idUser: user.id },
                            '!UL+Z]wnKk-?v=Y8u5w.}M),D:m]}bqx+t724GQ[k@FR:m#])KvPS!?3vEb6JVSDTk/Yb+gu!-?hxB7cy%kHuy:_QqG+NF8FRv[QzuVE7$/?N;dBSthJ-z{B$hk?=SXmu!=6auH=dY[[{muwAec2N@FJERA:T8za)QF+@)e92Y)/X9f-FZ7Wx4yQyR5V[y%TPJD2.UedkG?7XZW}Qh.ruT.Z)f3Bc=jUETuvn_!HAM:E.TVWB#B4C9*g?7Q*:*Dg(f/V4Yq]puLBFN=&7/TcANT#C?7y]fnC&N!:)FC!Qa/.',
                            { expiresIn: '24h' },
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
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
