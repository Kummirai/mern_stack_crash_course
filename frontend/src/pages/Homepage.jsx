import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../App";

const Homepage = () => {
  const products = useContext(ProductContext);

  return (
    <div className="mt-3 py-5 min-h-full  grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8 ">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default Homepage;
