import React from "react";
import { Link } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">SourceWebsite</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/explore-menu">Menu</Link>
          </li>
          <li>
            <Link to="/vendor-store">Vendors</Link>
          </li>
          <li>
            <Link to="/orders">My Orders</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <LoginPopup />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
