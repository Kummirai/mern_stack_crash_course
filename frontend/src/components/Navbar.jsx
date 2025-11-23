import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between mx-auto">
      <Link
        to="/"
        className="bg-blue-900 px-6 py-2 text-xl rounded-md text-white"
      >
        Product Store
      </Link>
      <div className="flex items-center justify-between">
        <Link to={"/create_product"}>
          <FaPlus className="text-white bg-blue-900 p-5 rounded-md mx-3" />
        </Link>
        <Link to={"/create_product"}>
          <CiLight className="text-white bg-blue-900 p-5 rounded-md" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
