const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product' });
  }
});

// Get featured products only
router.get('/featured', async (req, res) => {
  const featured = await Product.find({ featured: true });
  res.json(featured);
});

// Create product
router.post('/', async (req, res) => {
  const { name, price, stock, image, description } = req.body;
  const product = new Product({ name, price, stock, image, description });
  await product.save();
  res.status(201).json({ message: "Product created" });
});

// Toggle featured
router.patch('/:id/feature', async (req, res) => {
  const product = await Product.findById(req.params.id);
  product.featured = !product.featured;
  await product.save();
  res.json({ message: "Updated featured status" });
});

module.exports = router;
