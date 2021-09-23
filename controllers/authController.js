const { User } = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email && !password) {
      return res
        .status(400)
        .json({ error: 'One or more fields are not fulfilled!' });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'Email or Password are incorrect' });
    }

    const comparePasswords = await bcrypt.compare(password, user.password);

    if (!comparePasswords) {
      return res.status(404).json({ error: 'Email or Password are incorrect' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    // res.json(user);

    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      { expiresIn: 3600000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
      attributes: { exclude: ['password', 'id'] },
    });

    res.json(user);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  loginUser,
  getUser,
};
