'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
        targetKey: 'id',
      });

      this.hasMany(models.Comment, { foreignKey: 'video_id', sourceKey: 'id' });
    }
  }
  Video.init(
    {
      title: DataTypes.STRING,
      views: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Video',
      tableName: 'videos',
    }
  );
  return Video;
};
