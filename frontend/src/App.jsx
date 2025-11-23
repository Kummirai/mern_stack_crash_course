import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="p-5 max-w-5xl">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create_product" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
