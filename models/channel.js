'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'user_id', targetKey: 'id' });
      this.hasMany(models.Video, { foreignKey: 'user_id', sourceKey: 'id' });
    }
  }
  Channel.init(
    {
      name: DataTypes.STRING,
      subscribers: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Channel',
      tableName: 'channels',
    }
  );
  return Channel;
};
