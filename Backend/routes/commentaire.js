const express = require('express');
const router = express.Router();

const commentaireCtrl = require('../controllers/commentaire');

router.post('/:id', commentaireCtrl.createCommentaire);
router.put('/:id', commentaireCtrl.modifyCommentaire);
router.delete('/:id', commentaireCtrl.deleteCommentaire);

module.exports = router;