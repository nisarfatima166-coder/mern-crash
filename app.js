import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://mern-crash-khaki.vercel.app",
    "https://mern-crash-course-ws83-fkx16sgwd-nisarfatima166-coders-projects.vercel.app"
  ],
  credentials: true
}));

app.use(express.json());

connectDB();

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API working 🚀");
});

export default app;