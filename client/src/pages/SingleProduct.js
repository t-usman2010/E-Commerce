import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/SingleProduct.css';
import axios from 'axios';

const SingleProduct = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error('Failed to fetch product', err));
  }, [id]);

  if (!product) return <div className="page-container">Loading...</div>;

  return (
    <div className="page-container">
      <h2 className="animated-heading">Product Detail</h2>
      <div className="single-product-card">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>Rs: {product.price}</p>
          <p className="description">{product.description}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
