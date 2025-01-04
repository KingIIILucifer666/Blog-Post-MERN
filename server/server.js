import { connectToServer, getDb } from "./connect.js";
import express from "express";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";

const port = process.env.PORT || 3001;

const app = express();
// Middleware
app.use(cors());
// Parse incoming JSON
app.use(express.json());

// Post Routes
app.use("/api/posts", postRoutes);

app.listen(port, () => {
  connectToServer();

  console.log(`Server running on port ${port}`);
});
