const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log('Database connected successfully.'));
