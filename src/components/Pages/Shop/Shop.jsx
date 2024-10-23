import OrderSummary from "../OrderSummary/OrderSummary";
import Products from "../Products/Products";

const Shop = () => {
  return (
    <div className="compo_stater">
      <h2 className="py-5 text-2xl">This is Shop</h2>

      <div className="grid grid-cols-12">
        <div className=" col-span-9 border border-solid border-indigo-600 bg-indigo-100">
          <Products />
        </div>

        <div className=" col-span-3 border border-solid border-indigo-600 bg-indigo-100">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Shop;
