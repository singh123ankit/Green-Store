const mongoose = require('mongoose');
const Product = require('./productModel');
const User = require('./userModel');

const cartSchema = new mongoose.Schema({
  items: [
    {
      productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
      },
      qty: {
        type: Number,
        default: 0,
      },
      price: {
        type: Number,
        default: 0,
      },
      title: {
        type: String,
      },
    },
  ],
  totalQty: {
    type: Number,
    default: 0,
    required: true,
  },
  totalCost: {
    type: Number,
    default: 0,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'A product must belong to a user'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});


const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;