const mongoose = require('mongoose');
const moment = require('moment');

const Product = mongoose.model('Product', {
  name: {
    type: String,
    required: true,
    minlength: 6,
    trim: true
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    trim: 1
  },
  seller: {
    type: String,
    required: true,
    minlength: 6,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: moment().valueOf()
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = {Product};
