const router = require('express').Router();
const { auth } = require('../middleware/auth');
const {
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/usersController');

router.post('/', createUser);

router.put('/:id', auth, updateUser);

router.delete('/:id', auth, deleteUser);

module.exports = router;
