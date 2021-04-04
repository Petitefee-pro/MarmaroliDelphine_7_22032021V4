const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        console.log('authentification ok')
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, '!UL+Z]wnKk-?v=Y8u5w.}M),D:m]}bqx+t724GQ[k@FR:m#])KvPS!?3vEb6JVSDTk/Yb+gu!-?hxB7cy%kHuy:_QqG+NF8FRv[QzuVE7$/?N;dBSthJ-z{B$hk?=SXmu!=6auH=dY[[{muwAec2N@FJERA:T8za)QF+@)e92Y)/X9f-FZ7Wx4yQyR5V[y%TPJD2.UedkG?7XZW}Qh.ruT.Z)f3Bc=jUETuvn_!HAM:E.TVWB#B4C9*g?7Q*:*Dg(f/V4Yq]puLBFN=&7/TcANT#C?7y]fnC&N!:)FC!Qa/.');
        const idUser = decodedToken.idUser;
        if(req.body.idUser && req.body.idUser !== idUser) {
            throw 'idUser non valable !';
        } else {
            next();
        }
    }catch (error) {
        res.status(401).json({ error: error | 'Requête non authentifiée !'});
    }
};