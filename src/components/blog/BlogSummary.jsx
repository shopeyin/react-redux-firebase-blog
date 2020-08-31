import React from "react";
import photo from "../../img/photo.jpg";
import Moment from "react-moment";
import "./blog.style.scss";

function BlogSummary({ blog }) {
  return (
    <div className="card mt-4 text-none">
      <div
        className="image"
        style={{
          backgroundImage: `url(${photo})`,
        }}
      ></div>

      <div className="card-body">
        <h3 className="card-title">{blog.title}</h3>
        <p className="card-text">{blog.content}</p>
        <p className="card-text">
          {blog.authorFirstName} {blog.authorLastName}
        </p>
        <Moment format="Do MMMM YYYY - HH:mm">
          {blog.createdAt.toDate().toString()}
        </Moment>
      </div>
    </div>
  );
}

export default BlogSummary;
