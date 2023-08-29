const mongoose = require('mongoose');

const minuteSchema = new mongoose.Schema({
  minute: {
    type: String,
    required: [true, 'Time is required'],
  },
});
