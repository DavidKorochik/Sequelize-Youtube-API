const sequelize = require('./db/sequelize');
const express = require('express');
require('dotenv').config();

const app = express();

app.listen(process.env.PORT, async () => {
  console.log(`App is listening on port ${process.env.PORT}`);
  await sequelize.sync({ force: true });
  console.log('Database connected');
});
