import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-3">
      <Link
        to="/"
        className="text-3xl font-bold text-blue-950 flex items-baseline"
      >
        <span className="">Product Store</span>
        <GiShoppingCart className="text-2xl" />
      </Link>
      <div className="flex items-center justify-between">
        <Link to={"/create_product"} className="text-blue-950">
          <FaPlus className=" bg-blue-200 p-5 rounded-md mx-3" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
