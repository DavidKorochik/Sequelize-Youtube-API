const sequelize = require('../db/sequelize');
const { DataTypes } = require('sequelize');

const Orders = sequelize.define(
  'Orders',
  {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { tableName: 'orders' }
);

module.exports = Orders;
