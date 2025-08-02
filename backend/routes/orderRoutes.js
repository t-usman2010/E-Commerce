// backend/routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Place a new order
router.post('/', async (req, res) => {
  try {
    const { name, email, address, phone, total, items } = req.body;

    if (!name || !address || !items || items.length === 0) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const order = new Order({ name, email, address, phone, total, items });
    await order.save();

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (err) {
    console.error('Failed to place order:', err);
    res.status(500).json({ message: 'Failed to place order' });
  }
});

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error('Failed to fetch orders:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
