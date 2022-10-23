import React from "react";
import { useSelector } from "react-redux";
import "./FavorirteComponent.css";
import FavoriteItem from "./FavoriteItem";

function FavorirteComponent() {
  const favoriteItemsBefore = useSelector((state) => state.favorite.items);
  const favoriteItemsAfter = favoriteItemsBefore.map((item) => {
    return (
      <FavoriteItem
        key={item.id}
        id={item.id}
        image={item.image}
        describtion={item.describtion}
        title={item.title}
      />
    );
  });
  return (
    <div className="favorirte-component">
      {favoriteItemsBefore.length > 0 && (
        <h2 className="favorirte-component-title">FAVORITE ITEMS</h2>
      )}
      {favoriteItemsBefore.length === 0 ? (
        <p className="favorirte-component-no-items">No Item Found</p>
      ) : (
        favoriteItemsAfter
      )}
    </div>
  );
}

export default FavorirteComponent;
