import Router from "express";
import {
  getAllProductsController,
  addProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/productController.js";

const productRoute = Router();

productRoute.get("/", getAllProductsController);
productRoute.post("/", addProductController);
productRoute.put("/:id", updateProductController);
productRoute.delete("/:id", deleteProductController);

export { productRoute };
