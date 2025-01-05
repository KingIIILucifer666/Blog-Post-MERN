import { connectDbToMongoose, connectToServer, getDb } from "./connect.js";
import express from "express";
import cors from "cors";
import multer from "multer";
import postRoutes from "./routes/postRoutes.js";
import { logger } from "./middleware/posts.js";
import userRoutes from "./routes/userRouter.js";
import awsRoutes from "./routes/awsRoutes.js";

const port = process.env.PORT || 3001;

const app = express();
const upload = multer();

// Middleware
app.use(cors());
// Parse incoming with express JSON
app.use(express.json());
// Send Files as FormData()
app.use(upload.any());

// Custom Middleware
app.use(logger);

// Post Routes
app.use("/api/posts", postRoutes);
// User Routes
app.use("/api/users", userRoutes);
// AWS Images Bucket Routes
app.use("/api/images", awsRoutes);

//Error Handling Middleware
//Not found

//Custom Error Handler

//Connect Mongoose
connectDbToMongoose();

app.listen(port, () => {
  connectToServer();

  console.log(`Server running on port ${port}`);
});
