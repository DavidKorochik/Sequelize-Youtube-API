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

const updateChannel = async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  const obj = {};

  if (name) obj.name = name;

  try {
    const updatedChannel = await Channel.update({ name }, { where: { id } });

    res.json(updatedChannel);
  } catch (err) {
    return res.status(404).json({ error: 'No channel was found!' });
  }
};

const deleteChannel = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedChannel = await Channel.destroy({
      where: { id },
    });

    res.json(deletedChannel);
  } catch (err) {
    return res.status(404).json({ error: 'No channel was found!' });
  }
};

module.exports = {
  createChannel,
  getChannel,
  updateChannel,
  deleteChannel,
};
