import React from 'react';
import './Mainpage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Welcome to Electronic Store</h1>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-image">📱</div>
            <h3>Smartphone</h3>
            <p>Latest model with amazing features</p>
            <span className="price">$999</span>
            <button className="buy-button">Add to Cart</button>
          </div>
          <div className="product-card">
            <div className="product-image">💻</div>
            <h3>Laptop</h3>
            <p>Powerful performance for work and play</p>
            <span className="price">$1299</span>
            <button className="buy-button">Add to Cart</button>
          </div>
          <div className="product-card">
            <div className="product-image">🎧</div>
            <h3>Headphones</h3>
            <p>Premium sound quality</p>
            <span className="price">$299</span>
            <button className="buy-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;