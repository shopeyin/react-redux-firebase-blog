import React from "react";
import BlogSummary from "./BlogSummary";
import { Link } from "react-router-dom";
import "./listblog.style.scss";
function ListBlog({ blogs }) {
  return (
    <>
      {blogs &&
        blogs.map((blog) => {
          return (
            <Link className="link" to={`/blog/${blog.id}`} key={blog.id}>
              <BlogSummary blog={blog} />
            </Link>
          );
        })}
    </>
  );
}

export default ListBlog;
