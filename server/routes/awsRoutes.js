import { Router } from "express";
import {
  getImage,
  addImage,
  deleteImage,
} from "../controllers/awsController.js";
import verifyToken from "../middleware/auth.js";

const awsRoutes = Router();

//GET Image by id
awsRoutes.get("/:id", verifyToken, getImage);

//POST new Image
awsRoutes.post("/", verifyToken, addImage);

//DELETE post by id
awsRoutes.delete("/:id", verifyToken, deleteImage);

export default awsRoutes;
