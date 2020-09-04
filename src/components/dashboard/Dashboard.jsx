import React from "react";

import Notifications from "./Notifications";
import ListBlog from "../blog/ListBlog";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { compose } from "redux";

function Dashboard(props) {
  const { blogs, notifications } = props;

  return (
    <div className="row">
      <div className="col-sm-12 col-md-5">
        <ListBlog blogs={blogs} />
      </div>
      <div className="col-sm-12 col-md-4 offset-2">
        <Notifications notifications={notifications} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    blogs: state.firestore.ordered.blogs,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "blogs", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ])
)(Dashboard);
