const sql = require('../models/db');

const Forum = function(forum, /*user*/){
    this.idForum = forum.idForum,
    this.contenuText = forum.contenuText,
    this.contenuImage= forum.contenuImage,
    this.contenuDate = forum.contenuDate
    /*this.pseudo = user.pseudo*/
};

Forum.create = (newForum, result) => {
    sql.query(`INSERT INTO forums SET ?`, newForum, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("créé un nouveau forum: ", { id: res.insertId, ...newForum });
      result(null, { id: res.insertId, ...newForum });
    });
};  

Forum.updateById = (id, forum, result) => {
    sql.query(`UPDATE forums SET contenuText = ?, contenuImage = ?, contenuDate = ?, pseudo = ? WHERE id = ?`,
      [forum.contenuText, forum.contenuImage, forum.contenuDate, /*user.pseudo*/ , id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // forum non trouvé avec l'id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("modifié le forum: ", { id: id, ...forum });
        result(null, { id: id, ...forum });
      }
    );
};

Forum.remove = (id, result) => {
    sql.query(`DELETE FROM forums WHERE id = ?`, id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // forum non trouvé avec l'id
        result({ kind: "non trouvé" }, null);
        return;
      }
  
      console.log("effacé le forum avec l'id: ", id);
      result(null, res);
    });
};

Forum.getAll = result => {
    sql.query(`SELECT * FROM forums`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
    
        console.log("forum: ", res);
        result(null, res);
      });
};

Forum.findById = (forumId, result) => {
  sql.query(`SELECT * FROM forums WHERE id = ${forumId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("forum non trouvé: ", res[0]);
      result(null, res[0]);
      return;
    }

    // Forum non trouvé avec l'id
    result({ kind: "non trouvé" }, null);
  });
};

module.exports = Forum;