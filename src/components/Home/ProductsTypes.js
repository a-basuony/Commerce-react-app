import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductsTypes.css";
function ProductsTypes() {
  return (
    <div className="products-types-container">
      <h1>SHOP NOW</h1>
      <div className="products-types">
        <div className="box">
          <img src="https://st-adidas-egy.mncdn.com/content/uploads/homepage/desktop-shoes-category-0920.jpg" />
          <NavLink to="/products">SHOES</NavLink>
        </div>
        <div className="box">
          <img src="https://st-adidas-egy.mncdn.com/content/uploads/homepage/desktop-cloth-category-0920.jpg" />
          <NavLink to="/products">CLOTHING</NavLink>
        </div>
        <div className="box">
          <img src="https://st-adidas-egy.mncdn.com/content/uploads/homepage/egy_mobile_categories/category_desktop_accessories.jpg" />
          <NavLink to="/products">ACCESSORIES</NavLink>
        </div>
        <div className="box">
          <img src="https://st-adidas-egy.mncdn.com/content/uploads/homepage/egy_mobile_categories/category_desktop_Best_Sellers.jpg" />
          <NavLink to="/products">BEST SELLERS</NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProductsTypes;
