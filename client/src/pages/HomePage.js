import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import "../styles/HomePage.css"; // CSS with animation and styling

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="content-wrapper">
        <div className="section-card fade-in">
          <Hero />
        </div>

        <div className="section-card fade-in delay-1">
          <Categories />
        </div>

        <div className="section-card fade-in delay-2">
          <FeaturedProducts />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
