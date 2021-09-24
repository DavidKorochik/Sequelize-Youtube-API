const { auth } = require('../middleware/auth');
const router = require('express').Router();
const { getUser, loginUser } = require('../controllers/authController');

router.post('/', loginUser);

router.get('/', auth, getUser);

module.exports = router;
