import { getDb } from "../connect.js";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/Schema.js";

const collection = "users";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "3d" });
};

//Auth
//LoginUser
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw Error("All fields must be filled");
    }
    const user = await User.findOne({ email });
    if (!user) {
      throw Error("Invalid Credentials, email not Found!");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw Error("Invaild password");
    }
    const token = createToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const db = getDb();
    const data = await db.collection(collection).find({}).toArray();
    if (!data) {
      return res.status(404).json({ message: "No Users found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get User" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const db = getDb();
    const id = req.params.id;
    const data = await db
      .collection(collection)
      .findOne({ _id: new ObjectId(id) });
    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get User" });
  }
};

export const addUser = async (req, res) => {
  try {
    const db = getDb();

    const emailtaken = await db
      .collection(collection)
      .findOne({ email: req.body.email });

    if (emailtaken) {
      return res.json({ message: "Email Already Taken!" });
    }

    const hash = await bcrypt.hash(
      req.body.password,
      parseInt(process.env.SALT_ROUNDS)
    );

    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: hash,
      joinDate: new Date(),
      posts: [],
    };
    const result = await db.collection(collection).insertOne(newUser);
    if (!result) {
      return res.status(500).json({ message: "Failed to add new User" });
    }
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add new User" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const db = getDb();
    const updatedUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      joinDate: req.body.joinDate,
      posts: req.body.posts,
    };
    const id = req.params.id;
    const result = await db
      .collection(collection)
      .updateOne({ _id: new ObjectId(id) }, { $set: updatedUser });
    if (!result) {
      return res.status(500).json({ message: "Failed to update User" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update User" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const db = getDb();
    const id = req.params.id;
    const result = await db
      .collection(collection)
      .deleteOne({ _id: new ObjectId(id) });
    if (!result) {
      return res.status(500).json({ message: "Failed to delete post" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete post" });
  }
};
