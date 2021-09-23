const { Comment } = require('../models/index');

const createComment = async (req, res) => {
  const { comment } = req.body;
  const video_id = req.params.videoid;
  try {
    if (!comment) {
      return res.status(400).json({ error: 'Field must be fullfilled!' });
    }

    const commentToCreate = await Comment.create({
      comment,
      user_id: req.user.id,
      video_id,
    });

    res.json({ commentToCreate });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getAllComments = async (req, res) => {
  const video_id = req.params.videoid;
  try {
    const comments = await Comment.findAll({
      where: { video_id: video_id },
      inclide: ['User', 'Video'],
    });

    if (!comments) {
      return res.status(404).json({ error: 'No comments were found' });
    }

    res.json(comments);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createComment,
  getAllComments,
};
