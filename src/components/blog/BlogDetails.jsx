import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import Moment from "react-moment";
import "./blogdetail.style.scss";

function BlogDetails(props) {
  const { blog, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (blog) {
    return (
      <div className="container blog-details">
        <div className="card mb-3">
          <div
            className="imagee"
            style={{
              backgroundImage: `url(${blog.imageUrl})`,
            }}
          ></div>
          <div className="card-body">
            <h3 className="card-title">{blog.title} </h3>
            <p className="card-text">{blog.content}</p>
            <p className="card-text">
              <small className="text-muted">
                {blog.authorFirstName} {blog.authorLastName}
              </small>
              <small className="text-muted">
                {" "}
                <Moment format="Do MMMM YYYY - HH:mm">
                  {blog.createdAt.toDate().toString()}
                </Moment>
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <p>Loading....</p>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const blogs = state.firestore.data.blogs;
  const blog = blogs ? blogs[id] : null;

  return {
    id: id,
    blog: blog,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "blogs" }])
)(BlogDetails);
