import express from "express";
import dotenv from "dotenv";
import { connectionDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server running!");
});

app.listen(PORT, () => {
  connectionDB();
  console.log(`Sever running on port ${PORT}`);
});
