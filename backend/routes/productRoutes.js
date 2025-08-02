const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// ✅ Get featured products (moved to top to avoid conflict)
router.get('/featured', async (req, res) => {
  try {
    const featured = await Product.find({ featured: true });
    res.json(featured);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching featured products' });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products' });
  }
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

// Create new product
router.post('/', async (req, res) => {
  try {
    const { name, price, stock, image, description, featured = false } = req.body;
    const product = new Product({ name, price, stock, image, description, featured });
    await product.save();
    res.status(201).json({ message: "Product created" });
  } catch (err) {
    res.status(500).json({ message: 'Error creating product' });
  }
});

// Toggle featured status
router.patch('/:id/feature', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    product.featured = !product.featured;
    await product.save();

    res.json({ message: "Updated featured status", featured: product.featured });
  } catch (err) {
    res.status(500).json({ message: 'Error updating featured status' });
  }
});

module.exports = router;
