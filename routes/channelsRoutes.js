const { auth } = require('../middleware/auth');
const router = require('express').Router();
const {
  createChannel,
  getChannel,
  updateChannel,
  deleteChannel,
} = require('../controllers/channelsController');

router.post('/', auth, createChannel);

router.get('/:id', auth, getChannel);

router.put('/:id', auth, updateChannel);

router.delete('/:id', auth, deleteChannel);

module.exports = router;
