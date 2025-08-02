const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  items: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
