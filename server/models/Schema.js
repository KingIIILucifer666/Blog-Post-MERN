import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PostScehma = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, required: true },
});

// User Schema
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  joinDate: { type: Date, require: true },
  posts: [PostScehma],
});

// Create User model
const User = mongoose.model("users", UserSchema);
export default User;
