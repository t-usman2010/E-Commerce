import React from 'react';
import '../styles/Categories.css';

const categories = [
  { name: 'Clothes (Men)'},
  { name: 'Clothes (Women)'},
  { name: 'Men Accessories'},
  { name: 'Women Accessories'},
];

function Categories() {
  return (
    <div className="categories">
      <h2 className='animated-heading'>Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
