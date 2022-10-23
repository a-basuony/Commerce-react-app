import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeComponent.css";
function Home() {
  return (
    <div className="home">
      <div className="home-title">
        <span>ADIDAS</span>
        <p>IVY PARK STAN SUMMER</p>
        <NavLink to="/products" className="home-btn">
          SHOP NOW
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
