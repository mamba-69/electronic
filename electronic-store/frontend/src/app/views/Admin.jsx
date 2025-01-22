import React, { useState } from "react";
import "./Admin.css";

const Admin = () => {
  const [stats] = useState({
    totalProducts: 150,
    totalUsers: 1200,
    totalOrders: 450,
    revenue: 25000
  });

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1 className="admin-title">Admin Dashboard</h1>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{stats.totalProducts}</div>
          <div className="stat-label">Total Products</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.totalUsers}</div>
          <div className="stat-label">Total Users</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.totalOrders}</div>
          <div className="stat-label">Total Orders</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">${stats.revenue}</div>
          <div className="stat-label">Total Revenue</div>
        </div>
      </div>

      <div className="admin-section">
        <h2>Recent Orders</h2>
        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1234</td>
                <td>John Doe</td>
                <td>2025-01-22</td>
                <td>Completed</td>
                <td>$299.99</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

      <div className="admin-section">
        <h2>Add New Product</h2>
        <form className="admin-form">
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input type="text" id="productName" name="productName" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select id="category" name="category">
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <button type="submit" className="admin-button">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;