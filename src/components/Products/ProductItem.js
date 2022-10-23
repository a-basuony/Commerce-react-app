import React from "react";
import { useState } from "react";
import { FaShoppingCart, FaArrowAltCircleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";
import "./ProductItem.css";

function ProductItem(props) {
  const [addedClass, setAddedClass] = useState(false);
  const price = `$${props.price}`;
  const dispatch = useDispatch();
  const addToCartItem = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
      })
    );
    setAddedClass(true);
    setTimeout(() => {
      setAddedClass(false);
    }, 1000);
  };

  return (
    <div className="product-item">
      <img src={props.image} />
      <h2>{props.title}</h2>
      <div className="price">
        <span>{price}</span>
        <p className={addedClass ? "added-animations" : "added"}>ADDED</p>
        <div>
          <FaShoppingCart id="product-icon" onClick={addToCartItem} />
          <Link to={`/products/${props.id}`}>
            <FaArrowAltCircleRight className="link-product-det" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
