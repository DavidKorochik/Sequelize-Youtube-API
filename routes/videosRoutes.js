const { auth } = require('../middleware/auth');
const router = require('express').Router();
const {
  createVideo,
  getVideo,
  updateVideo,
  deleteVideo,
} = require('../controllers/videosController');

router.post('/', auth, createVideo);

router.get('/:id', auth, getVideo);

router.put('/:id', auth, updateVideo);

router.delete('/:id', auth, deleteVideo);

module.exports = router;
