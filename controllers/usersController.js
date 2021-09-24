const { User } = require('../models/index');
const { Op } = require('sequelize');
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

    let user = await User.findOne({ where: { email } });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = await User.create({ name, email, password: hashedPassword });

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

const updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  const obj = {};

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (name) obj.name = name;
    if (email) obj.email = email;
    if (password) obj.password = hashedPassword;

    const updatedUser = await User.update(
      { obj },
      { where: { [Op.and]: [{ id }, { id: req.user.id }] } }
    );

    res.json(updatedUser);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await User.destroy({
      where: { [Op.and]: [{ id }, { id: req.user.id }] },
    });

    res.json(deletedUser);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
};
