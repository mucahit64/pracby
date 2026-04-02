import express from "express";
import cors from "cors";
import { env } from "./config/env";
import apiRoutes from "./modules";
import { errorHandler } from "./middleware/error";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Pracby API çalışıyor 🚀" });
});

app.use("/api", apiRoutes);

// Global error handler — must be last
app.use(errorHandler);

app.listen(env.port, () => {
  console.log(`Server running on ${env.port}`);
});