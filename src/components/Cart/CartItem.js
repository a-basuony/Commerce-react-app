import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { FaWindowClose } from "react-icons/fa";

import "./CartItem.css";
function CartItem(props) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
      })
    );
  };
  const removeFromCart = () => {
    dispatch(
      cartActions.removeItemFromCart({ id: props.id, price: props.price })
    );
  };
  const removeItemFromCart = () => {
    dispatch(
      cartActions.deleteItemFromItems({
        quantity: props.quantity,
        totalPrice: props.totalPrice,
        id: props.id,
      })
    );
  };
  return (
    <div className="cart-item">
      <img src={props.image} className="cart-item-img" />
      <div className="cart-item-det">
        <div className="cart-item-title">
          <span className="product-name">
            {" "}
            <strong>Product Name :</strong> {props.title}{" "}
          </span>
          <span className="product-price">
            {" "}
            <strong>Product PRICE :</strong> {props.price} $
          </span>
        </div>
        <div className="cart-item-title-quantity">
          <span className="product-quantity">
            <strong>Product QUANTITY :</strong> {props.quantity}
          </span>
          <span className="product-total-price">
            <strong>TOTAL PRICE :</strong> {props.totalPrice} $
          </span>
        </div>
        <div className="cart-item-btns">
          <button onClick={addToCart}>+</button>
          <button onClick={removeFromCart}>-</button>
        </div>
        <FaWindowClose
          className="cart-item-icon"
          onClick={removeItemFromCart}
        />
      </div>
    </div>
  );
}

export default CartItem;
