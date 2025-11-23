import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateProduct from "./pages/CreateProduct";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="p-5 max-w-5xl h-screen mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create_product" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
