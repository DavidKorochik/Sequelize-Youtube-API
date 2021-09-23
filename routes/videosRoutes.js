const { auth } = require('../middleware/auth');
const { createVideo, getVideo } = require('../controllers/videosController');
const router = require('express').Router();

router.post('/', auth, createVideo);

router.get('/:id', auth, getVideo);

module.exports = router;
