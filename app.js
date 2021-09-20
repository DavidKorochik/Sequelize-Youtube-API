const express = require('express');
const { sequelize } = require('./models/index');

require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/users');
app.use('/api/channels');
app.use('/api/videos');
app.use('/api/comments');

app.listen(process.env.PORT, async () => {
  console.log(`App is listening in port ${process.env.PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connected to the database');
  } catch (err) {
    console.error('Unable to connect to the database');
  }
});
