import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [dateTime, setDateTime] = useState('2025-01-22 11:36:25');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toISOString()
        .replace('T', ' ')
        .split('.')[0];
      setDateTime(formatted);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Electronic Store</Link>
      </div>
      <div className="header-right">
        <span className="current-time">
          Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS formatted): {dateTime}
        </span>
        <span className="user-info">
          Current User's Login: mamba-69
        </span>
      </div>
    </header>
  );
};

export default Header;
