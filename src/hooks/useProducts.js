import { createContext, useEffect, useReducer, useState } from "react";
import ProductFetcherReducer, {
  initialState,
} from "../reducers/ProductFetcherReducer";
import axios from "axios";

// export const selectedProductContext = createContext({
//   selectedProductInfo: {},
//   setSelectedProductInfo: () => {},
// });

const useProducts = () => {
  const [state, dispatch] = useReducer(ProductFetcherReducer, initialState);
  const [selectedProductInfo, setSelectedProductInfo] = useState([]);

  const handleAddToCart = (productId) => {
    console.log(productId);
    const selectedProduct = state?.products.find(
      (product) => product.id === productId
    );
    console.log(selectedProduct);
    setSelectedProductInfo(selectedProduct);
  };

  const fetcherMethod = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  };

  useEffect(() => {
    fetcherMethod();
  }, []);

  return [state, dispatch, handleAddToCart];
};

export default useProducts;
