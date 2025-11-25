import { Link } from "react-router-dom";
import { RiAddBoxFill } from "react-icons/ri";

const Navbar = ({ handleIsEditing }) => {
  return (
    <header className="flex items-center justify-between p-3 bg-[#fbfbfb]">
      <Link
        aria-label="GO to home page"
        to="/"
        onClick={handleIsEditing}
        className="text-xl sm:text-[24px] font-semibold text-[black] flex items-baseline"
      >
        <span className="">Admin Product Management</span>
      </Link>
      <div className="flex items-center justify-between">
        <Link
          aria-label="Go to create product page"
          to={"/create_product"}
          onClick={handleIsEditing}
        >
          <RiAddBoxFill className="text-3xl" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
