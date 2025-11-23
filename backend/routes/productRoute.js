import Router from "express";
import {
  getAllProductsController,
  addProductController,
  updateProductController,
} from "../controllers/productController.js";

const productRoute = Router();

productRoute.get("/", getAllProductsController);
productRoute.post("/", addProductController);
productRoute.put("/:id", updateProductController);

export { productRoute };
