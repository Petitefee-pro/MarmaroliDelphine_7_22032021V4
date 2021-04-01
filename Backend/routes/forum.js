const express = require('express');
const router = express.Router();

const forumCtrl = require('../controllers/forum');

router.post('/', forumCtrl.createForum);
router.put('/:id', forumCtrl.modifyForum);
router.delete('/:id', forumCtrl.deleteForum);
router.get('/', forumCtrl.getAllForum);
router.get('/:id', forumCtrl.getOneForum);

module.exports = router;