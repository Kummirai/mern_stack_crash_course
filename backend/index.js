import express from "express";
import dotenv from "dotenv";
import { connectionDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose from "mongoose";
import { productRoute } from "./routes/productRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/api/products", productRoute);

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully!" });
  } catch (error) {
    res.status(404).json({ success: false, message: "Product Not Found!" });
  }
});

app.listen(PORT, async () => {
  await connectionDB();
  console.log(`Sever running on port ${PORT}`);
});
