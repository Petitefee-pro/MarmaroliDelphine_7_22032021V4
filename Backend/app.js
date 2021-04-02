const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();

const userRoutes = require('./routes/user');
const forumRoutes = require('./routes/forum');
const commentaireRoutes = require('./routes/commentaire');

/*const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'developper83',
    database: 'groupomania'
});
db.connect(function(err){
    if(err) throw err;
    console.log("Connecté à la base de données MySQL !");
    db.query("SELECT*FROM users", function (err, result, fields){
        if (err) throw err;
        console.log(result);
    })
});*/

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/user', userRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/commentaire', commentaireRoutes);

module.exports = app;