import React from 'react';
import '../styles/Newsletter.css';

function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Subscribe for Updates</h2>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

export default Newsletter;
