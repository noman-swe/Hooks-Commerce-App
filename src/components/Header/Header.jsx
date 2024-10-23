import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="w-[90%] mx-auto bg-teal-300 h-12 flex justify-center items-center gap-4">
        <Link to={"/"} className="link">
          Home
        </Link>
        <Link to={"/shop"} className="link">
          Shop
        </Link>
      </ul>
    </div>
  );
};

export default Header;
