const ProductReducer = (state = {products: []}, action) => {
  switch (action.type) {
    case "RETRIEVE_PRODUCTS":
      return {products: action.payload};

    default:
      return state;
  }
};
export default ProductReducer;
