const currentSale = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = currentSale, action) => {
  switch (action.type) {
    case "@cart/ADD":
      const { product } = action;
      return [...state, product];

    default:
      return state;
  }
};

export default cartReducer;
