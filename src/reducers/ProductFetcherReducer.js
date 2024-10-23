export const initialState = {
  isLoading: true,
  products: [],
  error: "",
};
const ProductFetcherReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        isLoading: false,
        products: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        isLoading: false,
        products: [],
        error: "Something went wrong.",
      };

    default:
      return state;
  }
};

export default ProductFetcherReducer;
