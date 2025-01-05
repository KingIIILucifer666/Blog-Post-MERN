import { Router } from "express";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/postController.js";

const postRoutes = Router();

//GET all posts
postRoutes.get("/", getPosts);

//GET post by id
postRoutes.get("/:id", getPostById);

//POST new post
postRoutes.post("/", createPost);

//PUT update post by id
postRoutes.put("/:id", updatePost);

//DELETE post by id
postRoutes.delete("/:id", deletePost);

export default postRoutes;
