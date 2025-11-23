import express from "express";
import dotenv from "dotenv";
import { connectionDB } from "./config/db.js";

import { productRoute } from "./routes/productRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/api/products", productRoute);

app.listen(PORT, async () => {
  await connectionDB();
  console.log(`Sever running on port ${PORT}`);
});
