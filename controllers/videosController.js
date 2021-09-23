const { Video } = require('../models/index');

const createVideo = async (req, res) => {
  const { title } = req.body;
  try {
    if (!title) {
      return res
        .status(400)
        .json({ error: 'One or more fields are not fulfilled!' });
    }

    const video = await Video.create({ title, user_id: req.user.id });

    res.json(video);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getVideo = async (req, res) => {
  const id = req.params.id;
  try {
    const video = await Video.findOne({
      where: { id },
      include: ['User'],
    });

    if (!video) {
      return res.status(404).json({ error: 'Video was not found' });
    }

    res.json(video);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createVideo,
  getVideo,
};
