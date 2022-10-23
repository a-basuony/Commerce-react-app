import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import favoriteSilce from "./favorite-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, favorite: favoriteSilce.reducer },
});

export default store;
