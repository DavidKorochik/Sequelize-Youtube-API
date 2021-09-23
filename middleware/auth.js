const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = async (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(403).json({ error: 'User not authorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  auth,
};
