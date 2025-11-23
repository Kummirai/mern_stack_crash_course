import React from "react";
import ProductCard from "../components/ProductCard";

const Homepage = () => {
  return (
    <div className="mt-8 p-5 bg-blue-50 h-[80%] grid grid-cols-3 gap-3 ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Homepage;
