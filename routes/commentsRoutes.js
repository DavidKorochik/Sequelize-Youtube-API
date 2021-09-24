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

router.put('/:videoid/:commentid', updateComment);

router.delete('/:videoid/:commentid', deleteComment);

module.exports = router;
