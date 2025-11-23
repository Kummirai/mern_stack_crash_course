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

const addProductController = async (req, res) => {
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
};

export { getAllProductsController, addProductController };
