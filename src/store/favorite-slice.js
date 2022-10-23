import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], to: "1" };
const favoriteSilce = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addItemToFavorite(state, action) {
      const newItem = action.payload;
      let isHere = false;
      state.items.map((item) => {
        if (item.id == newItem.id) isHere = true;
      });
      if (isHere) {
        window.alert("Item Is Already In The Favorite Items");
      }
      if (!isHere) {
        window.alert("Added To Favorite List");
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          describtion: newItem.describtion,
        });
      }
    },
    removeItemFromFavorite(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export default favoriteSilce;
export const favoriteActions = favoriteSilce.actions;
