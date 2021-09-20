const { User } = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
