const CreateProduct = () => {
  return (
    <div className="mt-8 p-5 bg-blue-50 h-[80%] flex items-center justify-center">
      <div className="flex flex-col justify-between w-full">
        <h2 className="text-blue-950 mb-8 text-center text-3xl font-semibold ">
          Create New Product
        </h2>
        <div className="sm:px-45 flex flex-col items-center">
          <div className="w-full">
            <input
              type="text"
              name=""
              id=""
              className="border border-blue-200 outline-blue-300 rounded-lg min-w-full max-w-2xl p-3 text-blue-800 mb-5"
              placeholder="Product name"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name=""
              id=""
              className="border border-blue-200 outline-blue-300 rounded-lg w-full p-3 text-blue-800 mb-5"
              placeholder="Product price"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name=""
              id=""
              className="border border-blue-200 outline-blue-300 rounded-lg min-w-full max-w-2xl p-3 text-blue-800 "
              placeholder="Product image url"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="mt-10 bg-blue-950 text-white py-3 px-10 rounded-md">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
