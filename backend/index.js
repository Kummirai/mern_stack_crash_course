import express from "express";
import dotenv from "dotenv";
import { connectionDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running!");
});

app.post("/api/products", async (req, res) => {
  const product = req.body;

  if (!product.name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide product name!" });
  } else if (!product.price) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide product price!" });
  } else if (!product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide product image!" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully!" });
  } catch (error) {
    console.error(`Error: ${ErrorEvent.message}`);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.listen(PORT, async () => {
  await connectionDB();
  console.log(`Sever running on port ${PORT}`);
});
