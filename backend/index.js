import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import movieRoutes from "./routes/movies.js";

const app = express();

// Settings
dotenv.config();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/movies", movieRoutes);

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
