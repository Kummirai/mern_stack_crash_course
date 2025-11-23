import Product from "../models/product.model.js";

const getAllProductsController = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Inrenal Server Error" });
  }
};

export { getAllProductsController };
