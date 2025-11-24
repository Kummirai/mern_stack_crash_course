import { Link } from "react-router-dom";
import { MdAddToPhotos } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";

const Navbar = ({ handleIsEditing }) => {
  return (
    <header className="flex items-center justify-between p-3 bg-[#fbfbfb]">
      <Link
        to="/"
        onClick={handleIsEditing}
        className="text-3xl font-bold text-[#131212] flex items-baseline"
      >
        <span className="">Admin Product Management</span>
        <GiShoppingCart className="text-2xl" />
      </Link>
      <div className="flex items-center justify-between">
        <Link
          to={"/create_product"}
          onClick={handleIsEditing}
          className="text-red-950"
        >
          <MdAddToPhotos className="bg-[#d4d5d2] p-5 rounded-md mx-3" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
