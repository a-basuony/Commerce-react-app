import React, { useState } from "react";
import { FaHeart, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header-section">
      <header>
        <h1>ADIDAS</h1>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                activeClassName="active"
                to="/home"
                id="main"
                className="header-link"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                to="/products"
                className="header-link"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                to="/cart"
                className="header-link"
              >
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                to="/favorite"
                className="header-link"
              >
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                to="/blog"
                className="header-link"
              >
                Blog
              </NavLink>
            </li>

            <li>
              <a
                className="close-toggel"
                onClick={() => {
                  document.querySelector(".nav").classList.toggle("toggle-nav");
                }}
              >
                Close
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <FaHeart className="icon" />
          <FaBars
            className="bars"
            onClick={() => {
              document.querySelector(".nav").classList.toggle("toggle-nav");
            }}
          />
        </div>
      </header>
      <div className="discount">
        <p>WELCOME OFFER 15% OFF*. USE “WELCOMEADI” AT CHECKOUT.</p>
      </div>
    </div>
  );
}

export default Header;
