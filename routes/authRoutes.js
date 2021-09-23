const { getUser, loginUser } = require('../controllers/authController');
const { auth } = require('../middleware/auth');
const router = require('express').Router();

router.post('/', loginUser);

router.get('/', auth, getUser);

module.exports = router;
