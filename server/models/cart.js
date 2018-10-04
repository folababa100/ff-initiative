const mongoose = require('mongoose');
// const moment = require('moment');

const Cart = mongoose.model('Cart', {
  name: {
    type: String,
    required: true,
  }
})

module.exports = { Cart }
