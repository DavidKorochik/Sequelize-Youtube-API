const { auth } = require('../middleware/auth');
const router = require('express').Router();
const {
  createChannel,
  getChannel,
} = require('../controllers/channelsController');

router.post('/', auth, createChannel);

router.get('/:id', auth, getChannel);

module.exports = router;
