/* eslint-disable react/prop-types */
const Product = (props) => {
  //   console.log("props", props);
  const {
    id,
    category,
    description,
    image,
    price,
    rating,
    title,
    handleAddToCart,
  } = props;

  return (
    <div>
      {" "}
      <div className="relative w-72 max-w-xs border border-solid border-gray-300 shadow-md rounded-2xl transition-all duration-500 bg-white pt-5 ">
        <div className="block overflow-hidden">
          <img
            src={image}
            className="w-[200px] h-[200px] mx-auto"
            alt="Card image"
          />
        </div>
        <div className="p-4 h-32 flex flex-col justify-start items-start">
          <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
            {title.length > 30 ? `${title.slice(0, 30)}...` : title}
          </h4>
          <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5">
            Price: ${price}
          </p>
          <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5">
            Category: {category}
          </p>
        </div>

        <div className="flex justify-center items-center gap-10">
          <button
            onClick={() => handleAddToCart(id)}
            className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs mb-5 text-white font-semibold"
          >
            Add To Cart
          </button>
          <button className="bg-sky-600 shadow-sm rounded-full py-2 px-5 text-xs mb-5 text-white font-semibold">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
