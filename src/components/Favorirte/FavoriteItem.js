import "./FavoriteItem.css";
import React from "react";
import { useDispatch } from "react-redux";
import { favoriteActions } from "../../store/favorite-slice";
function FavoriteItem(props) {
  const dispatch = useDispatch();

  const removeItemFromFavorite = () => {
    dispatch(favoriteActions.removeItemFromFavorite(props.id));
  };
  return (
    <div className="favorite-item">
      <img src={props.image} />
      <div className="favorite-item-content">
        <h1 className="favorite-item-title">{props.title}</h1>
        <button className="favorite-item-btn" onClick={removeItemFromFavorite}>
          REMOVE
        </button>
      </div>
    </div>
  );
}

export default FavoriteItem;
