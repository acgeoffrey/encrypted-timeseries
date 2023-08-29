const mongoose = require('mongoose');

const minuteSchema = new mongoose.Schema(
  {
    minute: {
      type: String,
      required: [true, 'Time is required'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    messages: [String],
  },
  {
    timestamps: true,
  }
);

modules.export = mongoose.model('Minute', minuteSchema);
