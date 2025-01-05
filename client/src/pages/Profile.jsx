import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import { getPosts } from "../api/api.js";
import { jwtDecode } from "jwt-decode";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getAllPosts() {
      const token = sessionStorage.getItem("User");
      const decodedUser = jwtDecode(token);
      setUser(decodedUser?.user);

      const allPosts = await getPosts();
      const filteredPosts = allPosts.data.filter(
        (post) => post.author === decodedUser.user._id
      );

      setPosts(filteredPosts);
    }

    getAllPosts();
  }, []);

  console.log("User Data: ", user);

  return (
    <div>
      <h1>{user.username}&apos;s Profile</h1>
      <div>
        {posts.length > 0 ? (
          posts.map((post) => <BlogCard key={post._id} post={post} />)
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
