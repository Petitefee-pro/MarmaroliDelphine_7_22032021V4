const express = require('express');
const router = express.Router();

const forumCtrl = require('../controllers/forum');
const auth = require('../middleware/auth');


router.post('/', forumCtrl.createForum);
/*router.put('/:id', auth, forumCtrl.modifyForum);*/
router.delete('/:id', forumCtrl.deleteForum);
router.get('/', forumCtrl.getAllForums);
router.get('/:id', forumCtrl.getOneForum);

module.exports = router;