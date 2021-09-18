const sequelize = require('./db/sequelize');
const Orders = require('./models/orders');
const Customers = require('./models/customer');
const Suppliers = require('./models/supplier');
const express = require('express');
require('dotenv').config();

Customers.hasMany(Orders);
Suppliers.hasMany(Customers);

const app = express();

app.listen(process.env.PORT, async () => {
  console.log(`App is listening on port ${process.env.PORT}`);
  await sequelize.sync({ force: true });
  console.log('Database connected');
});
