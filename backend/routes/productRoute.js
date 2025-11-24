import Router from "express";
import {
  getAllProductsController,
  addProductController,
  updateProductController,
  deleteProductController,
  getProductByIdController,
} from "../controllers/productController.js";

const productRoute = Router();

productRoute.get("/", getAllProductsController);
productRoute.post("/", addProductController);
productRoute.put("/:id", updateProductController);
productRoute.delete("/:id", deleteProductController);
productRoute.get("/:id", getProductByIdController);

export { productRoute };
