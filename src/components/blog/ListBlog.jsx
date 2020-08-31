import React from "react";
import BlogSummary from "./BlogSummary";
import { Link } from "react-router-dom";
function ListBlog({ blogs }) {
  console.log(blogs);
  return (
    <>
      {blogs &&
        blogs.map((blog) => {
          return (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <BlogSummary blog={blog} />
            </Link>
          );
        })}
    </>
  );
}

export default ListBlog;
