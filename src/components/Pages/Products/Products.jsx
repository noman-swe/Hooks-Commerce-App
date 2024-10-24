import Product from "../Product/Product";
import { Loader } from "../../SharedComps/SharedComps";
import useProducts from "../../../hooks/useProducts";

const Products = () => {
  const [state, dispatch, handleAddToCart] = useProducts();

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
            <Product
              key={product.id}
              {...product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
