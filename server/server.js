import { connectDbToMongoose, connectToServer, getDb } from "./connect.js";
import express from "express";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";
import { logger } from "./middleware/posts.js";
import userRoutes from "./routes/userRouter.js";

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
// User Routes
app.use("/api/users", userRoutes);

//Error Handling Middleware
//Not found

//Custom Error Handler

//Connect Mongoose
connectDbToMongoose();

app.listen(port, () => {
  connectToServer();

  console.log(`Server running on port ${port}`);
});
