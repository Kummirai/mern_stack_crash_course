import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { RiAddBoxFill } from "react-icons/ri";

const Navbar = ({ handleIsEditing }) => {
  return (
    <header className="flex items-center justify-between p-3 bg-[#fbfbfb]">
      <Link
        to="/"
        onClick={handleIsEditing}
        className="text-3xl font-bold text-[black] flex items-baseline"
      >
        <span className="">Admin Product Management</span>
        <GiShoppingCart className="text-2xl" />
      </Link>
      <div className="flex items-center justify-between">
        <Link to={"/create_product"} onClick={handleIsEditing}>
          <RiAddBoxFill className="text-3xl" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
