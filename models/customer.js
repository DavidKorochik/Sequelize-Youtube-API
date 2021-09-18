const sequelize = require('../db/sequelize');
const { DataTypes } = require('sequelize');

const Customers = sequelize.define(
  'Customers',
  {
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  },
  { tableName: 'customers' }
);

module.exports = Customers;
