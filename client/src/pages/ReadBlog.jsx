import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../api/api.js";
import formatDate from "../components/common.jsx";

const ReadBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const response = await getPost(id);
      if (response) {
        setPost(response.data);
        console.log("Post: ", response.data);
      }
    }
    if (id) {
      fetchPost();
    }
  }, [id]);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <h3>{post.content}</h3>
      <p>{formatDate(post.created_at)}</p>
    </div>
  );
};

export default ReadBlog;
