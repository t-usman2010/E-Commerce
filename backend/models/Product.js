// backend/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  category: String,
  stock: Number,
  description: String,
  featured: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Product', productSchema);
