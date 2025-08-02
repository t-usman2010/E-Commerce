import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../styles/Header.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">STYLE</div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      {/* Desktop Navigation */}
      <nav className="nav desktop-nav">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/Dashboard">Profile</Link>

        {user ? (
          <>
            {user.photoURL ? (
              <img src={user.photoURL} alt="avatar" className="user-avatar" />
            ) : (
              <div className="user-initial">
                {user.email?.charAt(0).toUpperCase()}
              </div>
            )}
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </nav>

      {/* Mobile Popup Menu */}
      {menuOpen && (
        <div className="mobile-menu-popup">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            Cart
          </Link>
          <Link to="/Dashboard" onClick={() => setMenuOpen(false)}>
            Profile
          </Link>

          {user ? (
            <>
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="avatar"
                  className="user-avatar mobile-avatar"
                />
              ) : (
                <div className="user-initial">
                  {user.email?.charAt(0).toUpperCase()}
                </div>
              )}
              <button
                className="logout-btn"
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
