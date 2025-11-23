import express from "express";
import dotenv from "dotenv";
import { connectionDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server running!");
});

app.post("/", async (req, res) => {
  const product = req.body;

  if (!product.name || product.price || product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all data!" });
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

app.listen(PORT, async () => {
  await connectionDB();
  console.log(`Sever running on port ${PORT}`);
});
