"use client";

import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
          <img src="/placeholder.svg" alt="Logo" className="logo-image" />
        </div>
        <div className="site-name">
          <span className="auction-text">Bid</span>
          <span className="domain-text">Estate</span>
        </div>
      </div>

      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <nav className={`navigation ${mobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="dropdown">
          <button className="nav-link dropdown-toggle">
            Buy <span className="dropdown-arrow">▼</span>
          </button>
          <div className="dropdown-content">{/* Dropdown content would go here */}</div>
        </div>

        <a href="#" className="nav-link">
          Sell
        </a>

        <div className="dropdown">
          <button className="nav-link dropdown-toggle">
            Learn <span className="dropdown-arrow">▼</span>
          </button>
          <div className="dropdown-content">{/* Dropdown content would go here */}</div>
        </div>

        <a href="#" className="nav-link">
          About Us
        </a>

        <a href="#" className="nav-link">
          Sign Up
        </a>

        <button className="login-button">Log In</button>
      </nav>
    </header>
  );
};

export default Header;
