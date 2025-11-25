import ProductCard from "../components/ProductCard";
import Message from "../components/Message";

const Homepage = ({ products, handleDeleteProduct, handleEdit, message }) => {
  return (
    <div className="mt-3 py-5 min-h-full  grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8 ">
      {products.map((product) => (
        <ProductCard
          product={product}
          handleDeleteProduct={handleDeleteProduct}
          key={product._id}
          handleEdit={handleEdit}
        />
      ))}
      <Message message={message}/>
    </div>
  );
};

export default Homepage;
