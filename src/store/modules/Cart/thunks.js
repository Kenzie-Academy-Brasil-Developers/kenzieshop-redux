import { addToCart } from "./action";

export const addToCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("@KenzieShop:cart")) || [];

  const newList = [...list, product];

  localStorage.setItem("@KenzieShop:cart", JSON.stringify(newList));

  dispatch(addToCart(product));
};
