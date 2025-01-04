import { Router } from "express";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/postController.js";

const router = Router();

//GET all posts
router.get("/", getPosts);

//GET post by id
router.get("/:id", getPostById);

//POST new post
router.post("/", createPost);

//PUT update post by id
router.put("/:id", updatePost);

//DELETE post by id
router.delete("/:id", deletePost);

export default router;
