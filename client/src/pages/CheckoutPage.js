import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Checkout.css";

function CheckoutPage() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    address: "",
    phone: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    const orderData = {
      name: form.fullName,
      email: form.email, 
      phone: form.phone,
      address: `${form.address}, ${form.city}, ${form.postalCode}, ${form.country}`,
      total: totalPrice,
      items: cartItems.map((item) => ({
        productId: item._id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    try {
      await axios.post("http://localhost:3001/api/orders", orderData);
      clearCart();
      navigate("/order-success");
    } catch (err) {
      console.error("Order failed:", err);
      alert("Failed to place order.",err);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <div className="order-summary">
            <h3>Order Summary</h3>
            {cartItems.map((item) => (
              <div key={item._id} className="checkout-item">
                <span>{item.name}</span>
                <span>{item.quantity} × Rs{item.price}</span>
              </div>
            ))}
            <h4>Total: Rs{totalPrice.toFixed(2)}</h4>
          </div>

          <div className="shipping-info">
            <h3>Shipping Info</h3>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email "
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={form.postalCode}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
      )}
    </div>
  );
}

export default CheckoutPage;
