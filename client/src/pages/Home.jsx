import { useState, useEffect } from "react";
import { getPosts } from "../api/api.js";
import BlogCard from "../components/BlogCard.jsx";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await getPosts();
      response.data.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setPosts(response.data);
      console.log(response.data);
    }
    fetchData();
  }, []);
  return (
    <div className="posts">
      {posts.map((post) => (
        <BlogCard post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Home;
