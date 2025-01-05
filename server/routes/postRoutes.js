import { Router } from "express";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/postController.js";
import verifyToken from "../middleware/auth.js";

const postRoutes = Router();

//GET all posts
postRoutes.get("/", verifyToken, getPosts);

//GET post by id
postRoutes.get("/:id", verifyToken, getPostById);

//POST new post
postRoutes.post("/", verifyToken, createPost);

//PUT update post by id
postRoutes.put("/:id", verifyToken, updatePost);

//DELETE post by id
postRoutes.delete("/:id", verifyToken, deletePost);

export default postRoutes;
