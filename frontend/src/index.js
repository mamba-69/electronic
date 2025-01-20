import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainPage.css';

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`main-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="header">
        <img src="/path/to/logo.png" alt="P&P Bro's Logo" className="logo" />
        <h1>P&P Bro's PVT. LTD.</h1>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;