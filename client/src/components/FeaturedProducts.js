import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/FeaturedProducts.css';

function FeaturedProducts() {
  const { addToCart } = useContext(CartContext);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products/featured')
      .then(res => res.json())
      .then(data => setFeatured(data));
  }, []);

  return (
    <section className="featured-products">
      <h2 className="animated-heading">Featured Products</h2>
      <div className="featured-products-list">
        {featured.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Rs. {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
