import React from "react";
import { useParams } from "react-router-dom";
import DUMMY_PRODUCTS from "../components/Data/Data";
import ProductDetailComponent from "../components/ProductDetail/ProductDetailComponent";

function ProductDetail() {
  const params = useParams();
  const product = DUMMY_PRODUCTS.find(
    (product) => product.id === params.productId
  );
  if (!product) {
    return <p>No Product Found</p>;
  }
  return (
    <ProductDetailComponent
      id={product.id}
      img={product.img}
      price={product.price}
      title={product.title}
      describtion={product.describtion}
    />
  );
}

export default ProductDetail;
