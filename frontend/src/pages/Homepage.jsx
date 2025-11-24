import { useContext } from "react";
import ProductCard from "../components/ProductCard";

const Homepage = ({ products, handleDeleteProduct, handleEdit }) => {
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
    </div>
  );
};

export default Homepage;
