import { connectToServer, getDb } from "./connect.js";
import express from "express";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";
import { logger } from "./middleware/posts.js";

const port = process.env.PORT || 3001;

const app = express();
// Middleware
app.use(cors());
// Parse incoming JSON
app.use(express.json());

// Custom Middleware
app.use(logger);

// Post Routes
app.use("/api/posts", postRoutes);

//Error Handling Middleware
//Not found

//Custom Error Handler

app.listen(port, () => {
  connectToServer();

  console.log(`Server running on port ${port}`);
});
