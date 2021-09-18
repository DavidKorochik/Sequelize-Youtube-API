const sequelize = require('../db/sequelize');
const { DataTypes } = require('sequelize');

const Suppliers = sequelize.define(
  'Suppliers',
  {
    supplier_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: 'suppliers' }
);

module.exports = Suppliers;
