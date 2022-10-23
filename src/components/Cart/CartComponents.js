import React from "react";
import "./CartComponents.css";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { cartActions } from "../../store/cart-slice";
function CartComponents() {
  const dispatch = useDispatch();
  const cartItemsBefore = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItemsAfter = cartItemsBefore.map((item) => {
    return (
      <CartItem
        id={item.id}
        title={item.name}
        price={item.price}
        image={item.image}
        quantity={item.quantity}
        totalPrice={item.totalPrice}
        key={item.id}
      />
    );
  });
  const resetCart = () => {
    dispatch(cartActions.resetCart());
  };
  const checkoutCart = () => {
    dispatch(cartActions.checkoutCart());
  };
  return (
    <div className="cart-components-height">
      <div className="cart-components-details">
        <h1 className="cart-com-title">YOUR BAG</h1>
        <span className="cart-com-total-amount">
          <strong>Total Amount :</strong> ({totalQuantity})
        </span>
        <span className="cart-com-total-price">
          <strong>Total Price :</strong> {totalPrice}$
        </span>
      </div>
      <div className="cart-components">
        <div className="items-section">
          {cartItemsBefore.length === 0 ? (
            <p id="no-items-found">NO ITEMS FOUND</p>
          ) : (
            cartItemsAfter
          )}
        </div>
        <div className="order-section">
          <button className="check-out" onClick={checkoutCart}>
            CHECK OUT
          </button>
          <div className="order-summary">
            <h1>Order Summary</h1>
            <div className="total-items">
              <span>
                <strong>
                  {cartItemsBefore.length > 1 ? " ITEMS" : "ITEM"}
                </strong>
              </span>
              <span>{cartItemsBefore.length} </span>
            </div>
            <div className="total-price">
              <span>
                <strong>Total Amount</strong>
              </span>
              <span>{totalQuantity}</span>
            </div>
            <div className="total-price">
              <span>
                <strong>Total Price</strong>
              </span>
              <span>{totalPrice}$</span>
            </div>
            <button className="cancel" onClick={resetCart}>
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartComponents;
