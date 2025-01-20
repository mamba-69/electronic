import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', image: '' });

  const handleLogin = () => {
    // Perform admin login logic here
    // For demonstration, we're just logging the credentials
    console.log('Admin ID:', adminId);
    console.log('Admin Password:', adminPassword);
  };

  const handleAddProduct = () => {
    // Perform add product logic here
    setProducts([...products, newProduct]);
    setNewProduct({ name: '', description: '', price: '', image: '' });
  };

  const handleRemoveProduct = (index) => {
    // Perform remove product logic here
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div className="admin-page">
      <h2>Admin Login</h2>
      <div className="login-form">
        <input
          type="text"
          placeholder="Admin ID"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>

      <h2>Manage Products</h2>
      <div className="add-product-form">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleRemoveProduct(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;