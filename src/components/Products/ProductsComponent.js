import React from "react";
import { useEffect } from "react";
import DUMMY_PRODUCTS from "../Data/Data";
import ProductItem from "./ProductItem";
import "./ProductsComponent.css";

export default React.memo(function ProductsComponent() {
  const ProductItems = DUMMY_PRODUCTS.map((product) => {
    return (
      <ProductItem
        image={product.img}
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        describtion={product.describtion}
      />
    );
  });
  return (
    <div>
      <h1 className="title">PRODUCTS</h1>
      <div className="products">{ProductItems}</div>
    </div>
  );
});
