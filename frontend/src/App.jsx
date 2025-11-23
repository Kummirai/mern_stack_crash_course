import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateProduct from "./pages/CreateProduct";
import Navbar from "./components/Navbar";
import { useEffect, useState, createContext } from "react";

export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/products");
      const data = await res.json();
      console.log(data);

      setProducts(data.data);
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      <div className="p-5 max-w-5xl h-screen mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create_product" element={<CreateProduct />} />
        </Routes>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
