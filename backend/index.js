import express from "express";
import dotenv from "dotenv";
import { connectionDB } from "./config/db.js";
import cors from "cors";

import { productRoute } from "./routes/productRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/api/products", productRoute);

app.listen(PORT, async () => {
  await connectionDB();
  console.log(`Sever running on port ${PORT}`);
});
