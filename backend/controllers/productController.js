import Product from "../models/product.model.js";
import mongoose from "mongoose";

const getAllProductsController = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Inrenal Server Error" });
  }
};

const getProductByIdController = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid product id or product id not found!",
    });
  }

  try {
    const product = await Product.findById(id);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Intenal Server Error" });
  }
};

const addProductController = async (req, res) => {
  const product = req.body;
  console.log(product);

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
};

const updateProductController = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid product id or product id not found!",
    });
  }

  try {
    await Product.findByIdAndUpdate(id, product, { new: true });
    res
      .status(200)
      .json({ success: true, message: "Product updated successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error!" });
  }
};

const deleteProductController = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid product id or product id not found!",
    });
  }
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export {
  getAllProductsController,
  addProductController,
  updateProductController,
  deleteProductController,
  getProductByIdController,
};
