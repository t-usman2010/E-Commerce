import React from 'react';
import '../styles/Categories.css';

const categories = [
  { name: 'Mobiles', image: 'https://via.placeholder.com/150?text=Mobiles' },
  { name: 'Laptops', image: 'https://via.placeholder.com/150?text=Laptops' },
  { name: 'Watches', image: 'https://via.placeholder.com/150?text=Watches' },
  { name: 'Shoes', image: 'https://via.placeholder.com/150?text=Shoes' },
];

function Categories() {
  return (
    <div className="categories">
      <h2 className='animated-heading'>Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
