import { RiDeleteBin6Line } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-blue-100 rounded-xs">
      <div className="p-1 h-[200px]">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xs w-full h-full object-cover"
        />
      </div>
      <div className="p-2">
        <h2 className="font-semibold text-blue-950 text-lg">{product.name}</h2>
        <h3 className="text-slate-600 font-normal">
          ${product.price.toFixed(2)}
        </h3>
        <div className="flex mr-2 mt-2 items-end justify-end">
          <button className="">
            <RiDeleteBin6Line className=" mr-2 text-red-600 text-xl hover:text-red-500 hover:cursor-pointer" />
          </button>
          <button>
            <MdModeEdit className="text-blue-900 text-xl hover:text-blue-700 hover:cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
