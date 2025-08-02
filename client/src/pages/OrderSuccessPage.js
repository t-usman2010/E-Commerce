// src/pages/OrderSuccessPage.js
import React from 'react';
import '../styles/Page.css';
import { Link } from 'react-router-dom';

const OrderSuccessPage = () => {
  return (
    <div className="page-container">
      <h2 className="animated-heading">🎉 Order Placed Successfully!</h2>
      <p style={{ fontSize: '18px', textAlign: 'center', margin: '20px auto' }}>
        Thank you for shopping with us. Your order has been confirmed.
      </p>
      <div style={{ textAlign: 'center' }}>
        <Link to="/" className="btn">Go to Home</Link>
        <Link to="/dashboard" className="btn" style={{ marginLeft: '10px' }}>View Profile</Link>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
