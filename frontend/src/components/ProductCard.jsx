import { RiDeleteBin6Line } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";

const ProductCard = ({ product, handleDeleteProduct, handleEdit }) => {
  return (
    <div className=" rounded-md shadow-lg h-fit">
      <div className="p-2 h-[200px]">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xs w-full h-full object-cover"
        />
      </div>
      <div className="p-2">
        <h2 className="font-semibold text-[black] text-lg line-clamp-1">
          {product.name}
        </h2>
        <h3 className="text-slate-600 font-normal">
          ${product.price.toFixed(2)}
        </h3>
        <div className="flex mr-2 mt-2 items-end justify-end pb-2">
          <button className="">
            <RiDeleteBin6Line
              onClick={() => handleDeleteProduct(product._id)}
              className=" mr-2 text-red-600 text-xl hover:text-red-500 hover:cursor-pointer"
            />
          </button>
          <button>
            <MdModeEdit
              className="text-[#d4d5d2] text-xl hover:text-[#9bb3be] hover:cursor-pointer"
              onClick={() => handleEdit(product._id)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
