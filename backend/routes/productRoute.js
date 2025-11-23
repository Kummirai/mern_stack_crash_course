import Router from "express";
import {
  getAllProductsController,
  addProductController,
} from "../controllers/productController.js";

const productRoute = Router();

productRoute.get("/", getAllProductsController);
productRoute.post("/", addProductController);

export { productRoute };
