"use client";

import React, { useEffect } from "react";
import { Link } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "./Header.css";

const Header = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <header className="header">
      <Link to="/" className="noline">
      <div className="logo-container">
        <div className="logo">
          <img src="assets/logo.jpeg" alt="Logo" className="logo-image" />
        </div>
        <div className="site-name">
          <span className="auction-text">Bid</span>
          <span className="domain-text">Estate</span>
        </div>
      </div>
      </Link>

      <nav className="navigation">
        <Link to="/" className="noline"><li>Home</li></Link>
        <Link to="/buy" className="noline"><li>Buy</li></Link>
        <Link to="/sell" className="noline"><li>Sell</li></Link>
        <Link to="/about" className="noline"><li>About</li></Link>

        {!isAuthenticated?<button className="login-button" onClick={() => loginWithRedirect()}>Log In</button>:<>
        <div>
          <img className="userProfile" src={user.picture} alt={user.name} />
          <h2 className="userInfo">{user.name}</h2>
        </div>
        <button className="logout-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
        </>}
      </nav>
    </header>
  );
};

export default Header;
