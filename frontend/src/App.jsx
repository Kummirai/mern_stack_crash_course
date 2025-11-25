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
  const [isEditing, setIsEditing] = useState(false);
  const [productId, setProductId] = useState();
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const feedbackMessage = (result) => {
    setMessage(result);
    setTimeout(() => {
      setMessage("");
    }, 1500);
  };

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/products");
    const data = await res.json();

    setProducts(data.data);
  };

  const handleUpdateProduct = async (id) => {
    const productData = {
      name: productName,
      price: productPrice,
      image: productImg,
    };
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      if (response.ok) {
        const result = await response.json();
        feedbackMessage(result);
        fetchData();
        setTimeout(() => {
          navigate("/");
        }, 1800);
      } else {
        const result = await response.json();
        feedbackMessage(result);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = async (id) => {
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "GET",
    });
    const data = await response.json();
    setIsEditing(true);
    navigate("/create_product");
    setProductName(data.data.name);
    setProductPrice(data.data.price);
    setProductImg(data.data.image);
    setProductId(data.data._id);
  };

  const resetInputFields = () => {
    setProductImg("");
    setProductName(" ");
    setProductPrice("");
  };

  const handleIsEditing = () => {
    setIsEditing(false);
    resetInputFields();
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    resetInputFields();
    navigate("/");
  };

  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        feedbackMessage(result);
      } else {
        console.error("Error:", response.status);
        feedbackMessage(result);
      }

      fetchData();
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
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
        feedbackMessage(result);
        fetchData();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        const result = await response.json();
        feedbackMessage(result);
      }
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

  return (
    <ProductContext.Provider value={products}>
      <div className="p-5 max-w-5xl h-screen mx-auto relative">
        <Navbar handleIsEditing={handleIsEditing} />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                products={products}
                handleDeleteProduct={handleDeleteProduct}
                handleEdit={handleEdit}
                setIsEditing={setIsEditing}
                message={message}
              />
            }
          />
          <Route
            path="/create_product"
            element={
              <CreateProduct
                handleImgChange={handleImgChange}
                handleNameChange={handleNameChange}
                handleAddProduct={handleAddProduct}
                handlePriceChange={handlePriceChange}
                isEditing={isEditing}
                handleCancelEdit={handleCancelEdit}
                productImg={productImg}
                productName={productName}
                productPrice={productPrice}
                handleUpdateProduct={handleUpdateProduct}
                productId={productId}
                message={message}
              />
            }
          />
        </Routes>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
