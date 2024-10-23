import { useEffect, useReducer } from "react";
import Product from "../Product/Product";
import ProductFetcherReducer, {
  initialState,
} from "../../../reducers/ProductFetcherReducer";
import axios from "axios";
import { Loader } from "../../SharedComps/SharedComps";

const Products = () => {
  const [state, dispatch] = useReducer(ProductFetcherReducer, initialState);

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

  console.log(state);

  return (
    <div className="">
      {state.isLoading && (
        <div className="flex justify-center items-center h-64">
          <Loader />
        </div>
      )}
      {state.error && (
        <div className="flex justify-center items-center h-64">
          <span>{state.error}</span>
        </div>
      )}
      {state.products && (
        <div className="grid grid-cols-3 gap-5 mx-2 my-4">
          {state.products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
