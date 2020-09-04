import React from "react";
import photo from "../../img/photo.jpg";
import Moment from "react-moment";
import "./blog.style.scss";

function BlogSummary({ blog }) {
  return (
    <div className="card mt-4 text-none widt">
      <div
        className="image"
        style={{
          backgroundImage: `url(${blog.imageUrl})`,
        }}
      ></div>

      <div className="card-body border">
        <h3 className="card-title" style={{ fontWeight: "bold" }}>
          {blog.title}
        </h3>

        <h5 className="card-text ">
          {blog.authorFirstName} {blog.authorLastName}
        </h5>
        <small>
          <Moment format="Do MMMM YYYY - HH:mm">
            {blog.createdAt.toDate().toString()}
          </Moment>
        </small>
      </div>
    </div>
  );
}

export default BlogSummary;
