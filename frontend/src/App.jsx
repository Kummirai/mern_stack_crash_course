import { Routes, Route, redirect } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateProduct from "./pages/CreateProduct";
import Navbar from "./components/Navbar";
import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productImg, setProductImg] = useState();

  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/products");
    const data = await res.json();
    console.log(data);

    setProducts(data.data);
  };

  const handleAddProduct = async () => {
    const productData = {
      name: productName,
      price: productPrice,
      image: productImg,
    };
    try {
      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
      } else {
        console.error("Error:", response.status);
      }

      fetchData();
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleNameChange = (e) => {
    setProductName(e.target.value);
  };
  const handlePriceChange = (e) => {
    setProductPrice(e.target.value);
  };
  const handleImgChange = (e) => {
    setProductImg(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const appContext = [products, productName, productPrice, productImg];
  return (
    <ProductContext.Provider value={appContext}>
      <div className="p-5 max-w-5xl h-screen mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage products={products} />} />
          <Route
            path="/create_product"
            element={
              <CreateProduct
                handleImgChange={handleImgChange}
                handleNameChange={handleNameChange}
                handleAddProduct={handleAddProduct}
                handlePriceChange={handlePriceChange}
              />
            }
          />
        </Routes>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
