import { Router } from "express";
import {
  addUser,
  deleteUser,
  getUserById,
  getUsers,
  loginUser,
  updateUser,
} from "../controllers/userControllers.js";

const userRoutes = Router();

//GET all users
userRoutes.get("/", getUsers);

//GET user by id
userRoutes.get("/:id", getUserById);

//POST Register User
userRoutes.post("/", addUser);

//POST Login user
userRoutes.post("/login", loginUser);

//PUT update user by id
userRoutes.put("/:id", updateUser);

//DELETE user by id
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
