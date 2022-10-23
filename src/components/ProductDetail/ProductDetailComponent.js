import "./ProductDetailComponent.css";
import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { favoriteActions } from "../../store/favorite-slice";

function ProductDetailComponent(props) {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    window.alert("Added To Cart");
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        price: props.price,
        title: props.title,
        image: props.img,
      })
    );
  };
  const addToFavorite = () => {
    dispatch(
      favoriteActions.addItemToFavorite({
        id: props.id,
        title: props.title,
        describtion: props.describtion,
        image: props.img,
      })
    );
  };
  return (
    <div className="product-details">
      <img src={props.img} />
      <div className="product-details-content">
        <h1 className="product-details-title">{props.title}</h1>
        <span className="product-details-price">Price : {props.price}$</span>
        <p className="product-details-description">{props.describtion}</p>

        <button onClick={addToCartHandler}>ADD TO CART</button>
        <button onClick={addToFavorite}>ADD TO FAVORITE</button>
      </div>
    </div>
  );
}

export default ProductDetailComponent;
