import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-text'>
        <h1>Your One-Stop STYLE</h1>
        <p>Discover premium fashion at unbeatable prices!</p>
        <button className='hero-button'>Shop Now</button>
      </div>
    </section>
  );
}

export default Hero;