import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../api/api.js";
import formatDate from "../components/common.jsx";

const ReadBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchPost() {
      const response = await getPost(id);
      if (response) {
        setPost(response);
        console.log("Post: ", response);
      }
    }
    if (id) {
      fetchPost();
    }
  }, [id]);

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <img src={post?.image?.data || ""} alt={post?.title || "Blog Image"} />
      <h1>{post?.title}</h1>
      <h2>{post?.description}</h2>
      <h3>{post?.content}</h3>
      <p>{formatDate(post?.created_at)}</p>
    </>
  );
};

export default ReadBlog;
