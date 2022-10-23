import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0, totalPrice: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalPrice = state.totalPrice + newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload.id;
      const price = action.payload.price;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalPrice = state.totalPrice - price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    resetCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
    checkoutCart(state) {
      if (state.items.length === 0) {
        window.alert("There Is No Products In Your Cart");
      } else {
        window.alert("Thanks For Your Order ❤");
        state.items = [];
        state.totalPrice = 0;
        state.totalQuantity = 0;
      }
    },
    deleteItemFromItems(state, action) {
      const deletedItem = action.payload;
      state.totalQuantity = state.totalQuantity - deletedItem.quantity;
      state.totalPrice = state.totalPrice - deletedItem.totalPrice;
      state.items = state.items.filter((item) => item.id !== deletedItem.id);
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
