import Message from "../components/Message";

const CreateProduct = ({
  handleAddProduct,
  handleNameChange,
  handleImgChange,
  handlePriceChange,
  isEditing,
  handleCancelEdit,
  productImg,
  productName,
  productPrice,
  handleUpdateProduct,
  productId,
  message,
}) => {
  return (
    <div className="mt-8 p-5 bg-[#fbfbfb] h-[80%] flex items-center justify-center">
      <div className="flex flex-col justify-between w-full">
        <h2 className="text-[black] mb-8 text-center text-3xl font-semibold ">
          Create New Product
        </h2>
        <div className="sm:px-45 flex flex-col items-center">
          <div className="w-full">
            <input
              type="text"
              onChange={(e) => handleNameChange(e)}
              className="border border-[#d4d5d2] outline-[#9bb3be] rounded-lg min-w-full max-w-2xl p-3 text-[black] mb-5"
              placeholder="Product name"
              value={productName}
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              onChange={(e) => handlePriceChange(e)}
              className="border border-[#d4d5d2] outline-[#9bb3be] rounded-lg min-w-full max-w-2xl p-3 text-[black] mb-5"
              placeholder="Product price"
              value={productPrice}
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              onChange={(e) => handleImgChange(e)}
              className="border border-[#d4d5d2] outline-[#9bb3be] rounded-lg min-w-full max-w-2xl p-3 text-[black] mb-5"
              placeholder="Product image url"
              value={productImg}
            />
          </div>
        </div>
        {!isEditing ? (
          <div className="flex items-center justify-center">
            <button
              className="mt-10 bg-[black] text-white py-3 px-10 rounded-md hover:cursor-pointer"
              onClick={handleAddProduct}
            >
              Add Product
            </button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row  items-center justify-center">
            <button
              aria-label="Delete"
              className="mt-10 bg-[black] text-white py-3 px-10 mr-2 rounded-md hover:cursor-pointer"
              onClick={() => handleUpdateProduct(productId)}
            >
              Update Product
            </button>
            <button
              aria-label="Edit"
              className="mt-10 bg-[black] text-white py-3 px-10 rounded-md hover:cursor-pointer"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
      <Message message={message} />
    </div>
  );
};

export default CreateProduct;
