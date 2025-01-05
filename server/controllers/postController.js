import { getDb } from "../connect.js";
import { ObjectId } from "mongodb";

const collection = "posts";

export const getPosts = async (req, res) => {
  try {
    const db = getDb();
    const posts = await db.collection(collection).find({}).toArray();
    if (!posts) {
      return res.status(404).json({ message: "No posts found" });
    }
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

export const getPostById = async (req, res) => {
  try {
    const db = getDb();
    const id = req.params.id;
    const post = await db
      .collection(collection)
      .findOne({ _id: new ObjectId(id) });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get post" });
  }
};

export const createPost = async (req, res) => {
  try {
    const db = getDb();
    const newPost = {
      title: req.body.title,
      author: req.body.user.id,
      description: req.body.description,
      content: req.body.content,
      created_at: req.body.created_at,
      imageId: req.body.imageId,
    };
    const result = await db.collection(collection).insertOne(newPost);
    if (!result) {
      return res.status(500).json({ message: "Failed to create post" });
    }
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create post" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const db = getDb();
    const updatedPost = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      content: req.body.content,
      created_at: req.body.created_at,
      imageId: req.body.imageId,
    };
    const id = req.params.id;
    const result = await db
      .collection(collection)
      .updateOne({ _id: new ObjectId(id) }, { $set: updatedPost });
    if (!result) {
      return res.status(500).json({ message: "Failed to update post" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update post" });
  }
};

export const deletePost = async (req, res) => {
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
