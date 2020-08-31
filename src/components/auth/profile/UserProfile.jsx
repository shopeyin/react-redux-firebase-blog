import React from "react";
import Createblog from "../../blog/Createblog";
import EditBlog from "../../blog/EditBlog";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";
import { Redirect, Link } from "react-router-dom";
import "./user.style.scss";
import { deleteBlog } from "../../../redux/blog/blog-actions";

// function checkBlog(blog) {
//   if (isEmpty(blog)) {
//     return "yes";
//   } else {
//     return "no";
//   }
// }

function UserProfile(props) {
  const { auth, profile, blogs, deleteBlog } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  console.log(blogs);
  const style = {
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div className="row">
      <div className="col-12 order-2  col-sm-12 order-sm-1  col-md-6 ">
        {blogs &&
          blogs.map((item) => {
            return (
              <div className="card mt-4" key={item.id}>
                <div style={style}>
                  <h3 className="card-title ml-3 mt-2 text-info">
                    {item.title}{" "}
                  </h3>
                  <div style={style}>
                    <span
                      aria-hidden="true"
                      onClick={() => deleteBlog(item.id)}
                      className="mr-3 close mt-2"
                    >
                      &times;
                    </span>
                    <span style={{ marginRight: "5px" }}>
                      <EditBlog item={item} />
                    </span>
                  </div>
                </div>

                <div className="card-body">{item.content}</div>
              </div>
            );
          })}
      </div>
      <div className="col-12  order-1  col-sm-12 order-sm-2 col-md-4 offset-md-1 mt-4 ">
        <Createblog />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    blogs: state.firestore.ordered.blogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBlog: (blog) => dispatch(deleteBlog(blog)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "blogs",

        where: ["authorId", "==", props.auth.uid],
        orderBy: ["createdAt", "desc"],
      },
    ];
  })
)(UserProfile);

// if (isEmpty(blogs)) {
//   return (
//     <div>
//       {" "}
//       <Createblog />
//       Loading...
//     </div>
//   );
// } else {
//   return (
//     <div>
//       <Createblog />
//       {auth.uid} <br />
//       {profile.firstName}
//       <ul className="list-group list-group-flush">
//         {blogs &&
//           blogs.map((item) => {
//             return (
//               <div key={item.id}>
//                 <Link to="/" key={item.id}>
//                   <li className="list-group-item" key={item.id}>
//                     {item.title} {item.id}
//                   </li>
//                 </Link>
//               </div>
//             );
//           })}
//       </ul>
//     </div>
//   );
// }
