const { Channel } = require('../models/index');

const createChannel = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name && !subscribers) {
      return res
        .status(400)
        .json({ error: 'One or more fields are not fulfilled!' });
    }

    const channel = await Channel.create({ name, user_id: req.user.id });

    res.json(channel);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getChannel = async (req, res) => {
  const id = req.params.id;
  try {
    const channel = await Channel.findOne({ where: { id }, include: ['User'] });

    if (!channel) {
      return res.status(404).json({ error: 'No channel was found!' });
    }

    res.json(channel);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createChannel,
  getChannel,
};
