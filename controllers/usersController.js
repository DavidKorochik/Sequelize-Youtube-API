const { User } = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name && !email && !password) {
      return res
        .status(400)
        .json({ error: 'One or more fields are not fulfilled!' });
    }

    // let user = await User.findAll({ where: { email } });

    // if (user) {
    //   return res.status(401).json({ error: 'User already exists' });
    // }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password: hashedPassword });

    const payload = {
      user: {
        id: user.id,
      },
    };

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

module.exports = {
  createUser,
};
