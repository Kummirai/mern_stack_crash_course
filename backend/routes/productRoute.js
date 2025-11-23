import Router from "express";
import { getAllProductsController } from "../controllers/productController.js";

const productRoute = Router();

productRoute.get("/", getAllProductsController);

export { productRoute };
