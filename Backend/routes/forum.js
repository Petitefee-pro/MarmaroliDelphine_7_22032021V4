const express = require('express');
const router = express.Router();

const forumCtrl = require('../controllers/forum');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer');

router.post('/', auth, multer, forumCtrl.createForum);
router.put('/:id', auth, multer, forumCtrl.modifyForum);
router.delete('/:id', auth, forumCtrl.deleteForum);
router.get('/', auth, forumCtrl.getAllForum);
router.get('/:id', auth, forumCtrl.getOneForum);

module.exports = router;