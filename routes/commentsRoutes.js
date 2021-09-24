const { auth } = require('../middleware/auth');
const router = require('express').Router();
const {
  createComment,
  getAllComments,
  updateComment,
  deleteComment,
} = require('../controllers/commentsController');

router.post('/:videoid', auth, createComment);

router.get('/:videoid', getAllComments);

router.put('/:videoid/:commentid', auth, updateComment);

router.delete('/:videoid/:commentid', auth, deleteComment);

module.exports = router;
