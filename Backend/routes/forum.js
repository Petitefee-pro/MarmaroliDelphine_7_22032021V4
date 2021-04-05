const express = require('express');
const router = express.Router();

const forumCtrl = require('../controllers/forum');
const auth = require('../middleware/auth');


router.post('/', auth, forumCtrl.createForum);
/*router.put('/:id', auth, forumCtrl.modifyForum);*/
router.delete('/:id', auth, forumCtrl.deleteForum);
router.get('/', auth, forumCtrl.getAllForums);
router.get('/:id', auth, forumCtrl.getOneForum);

module.exports = router;