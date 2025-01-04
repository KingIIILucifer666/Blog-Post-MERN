import { Link } from "react-router-dom";
import formatDate from "./common";

const BlogCard = ({ post }) => {
  return (
    <Link to={`/read-blog/${post._id}`} className="post">
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <p>{formatDate(post.created_at)}</p>
    </Link>
  );
};
export default BlogCard;
