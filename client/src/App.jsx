import { useEffect, useState } from "react";
import "./App.css";
import { createPost, deletePost, getPosts } from "./api/api";

function App() {
  // const base_url = process.env.API_BASE_URL || "http://localhost:8000";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadAllPosts = async () => {
      try {
        const res = await getPosts();
        if (res.status === 200) {
          console.log("Data fetched successfully: ", res.data);
          setPosts(res.data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    loadAllPosts();
  }, []);

  const addPost = async () => {
    try {
      const newPost = {
        title: "New Post",
        author: "Monkie Uncle",
        description: "This is a new post",
        content: "This is a new post content",
        created_at: new Date().toISOString(),
      };

      const res = await createPost(newPost);
      if (res.status === 201) {
        setPosts([...posts, res.data]);
      }
      console.log("Post added successFully");
    } catch (error) {
      console.error("Error adding post: ", error);
    }
  };

  return (
    <>
      <div>
        <h1>Posts</h1>
        {posts.length > 0 &&
          posts.map((post) => (
            <div key={post._id}>
              <p>{post._id}</p>
              <p>{post.title}</p>
              <p>{post.author}</p>
              <p>{post.description}</p>
              <p>{post.content}</p>
              <p>{post.created_at}</p>
              <button
                onClick={() => {
                  deletePost(post._id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
      <button onClick={addPost}>Add Post</button>
    </>
  );
}

export default App;
