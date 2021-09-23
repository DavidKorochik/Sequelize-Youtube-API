const { createUser } = require('../controllers/usersController');
const router = require('express').Router();

router.post('/', createUser);

module.exports = router;
