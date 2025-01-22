import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;