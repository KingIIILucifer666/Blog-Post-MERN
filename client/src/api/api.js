import axios from "axios";

const base_url = "http://localhost:8000";

export const getPosts = async () => {
  try {
    const response = await axios.get(`${base_url}/api/posts`);

    return response;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const getPost = async (id) => {
  try {
    const response = await axios.get(`${base_url}/api/posts/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching post: ", error);
  }
};

export const createPost = async (newPost) => {
  try {
    const response = await axios.post(`${base_url}/api/posts`, newPost);
    return response;
  } catch (error) {
    console.error("Error adding post: ", error);
    throw error;
  }
};

export const updatePost = async (id, updatedPost) => {
  try {
    const response = await axios.put(
      `${base_url}/api/posts/${id}`,
      updatedPost
    );
    return response;
  } catch (error) {
    console.error("Error updating post: ", error);
  }
};

export const deletePost = async (id) => {
  try {
    if (!id) {
      throw new Error("No id provided");
    }
    const response = await axios.delete(`${base_url}/api/posts/${id}`);
    return response;
  } catch (error) {
    console.error("Error deleting post: ", error);
  }
};

//Users

export const getUsers = async () => {
  try {
    const response = await axios.get(`${base_url}/api/users`);

    return response;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${base_url}/api/users/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching user: ", error);
  }
};

export const addUser = async (newUser) => {
  try {
    const response = await axios.post(`${base_url}/api/users`, newUser);
    return response;
  } catch (error) {
    console.error("Error adding user: ", error);
    throw error;
  }
};

export const updateUser = async (id, updatedUser) => {
  try {
    const response = await axios.put(
      `${base_url}/api/users/${id}`,
      updatedUser
    );
    return response;
  } catch (error) {
    console.error("Error updating user: ", error);
  }
};

export const verifyUser = async (user) => {
  try {
    const response = await axios.post(`${base_url}/api/users/login`, user);
    return response;
  } catch (error) {
    console.error(`Error verifying user: ${error}`);
  }
};
