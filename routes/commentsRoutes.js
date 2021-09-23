const { auth } = require('../middleware/auth');
const router = require('express').Router();
const {
  createComment,
  getAllComments,
} = require('../controllers/commentsController');

router.post('/:videoid', auth, createComment);

router.get('/:videoid', getAllComments);

module.exports = router;
