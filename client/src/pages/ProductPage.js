import React, { useEffect, useState, useContext } from 'react';
import '../styles/Page.css';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/products') // ✅ Make sure this is correct
      .then(res => {
        console.log("Products fetched:", res.data); // ✅ Debug log
        setProducts(res.data);
      })
      .catch(err => {
        console.error('Failed to fetch products', err);
      });
  }, []);

  return (
    <div className="page-container">
      <h2 className="animated-heading">All Products</h2>
      <div className="product-grid">
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => (
            <div key={product._id} className="product-card">
              <Link to={`/product/${product._id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Rs. {product.price}</p>
              </Link>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPage;
