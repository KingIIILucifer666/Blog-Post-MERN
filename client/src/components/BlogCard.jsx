import { Link } from "react-router-dom";
import formatDate from "./common";
import PropTypes from "prop-types";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BlogCard = ({ post }) => {
  return (
    <Card className="flex w-full justify-center my-8 hover:bg-muted">
      <Link to={`/read-blog/${post._id}`} className="w-full">
        <CardHeader>
          <CardTitle>
            <h1 className="text-primary scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {post.title}
            </h1>
          </CardTitle>
          <CardDescription>
            <h2>{post.description}</h2>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3>{formatDate(post.created_at)}</h3>
        </CardContent>
      </Link>
    </Card>
  );
};

BlogCard.propTypes = {
  post: PropTypes.func.isRequired,
};
export default BlogCard;
