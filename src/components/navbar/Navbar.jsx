import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./navbar.style.scss";

import { signOut } from "../../redux/auth/auth-actions";

function Navbar(props) {
  const { auth, signOut, profile } = props;

  const initials = profile ? profile.initials : null;

  const style = {
    color: "black",
    cursor: "pointer",
  };

  return (
    <nav className="mb-1 navbar  navbar-expand-lg navbar-dark default-color nav-container">
      <Link to="/" className="navbar-brand" href="index.html">
        <h3>BH</h3>
      </Link>
      <button
        style={style}
        className="navbar-toggler text-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent-333"
        aria-controls="navbarSupportedContent-333"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse "
        id="navbarSupportedContent-333"
      >
        <ul className="navbar-nav directory ">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle dark"
              id="navbarDropdownMenuLink-333"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={style}
            >
              About
            </a>
            <div
              className="dropdown-menu dropdown-default"
              aria-labelledby="navbarDropdownMenuLink-333"
            >
              <Link className="dropdown-item" to="/">
                Services
              </Link>
              <Link className="dropdown-item" to="/">
                Company
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/" style={{ color: "black" }}>
              Contact
            </Link>
          </li>
        </ul>

        {auth.uid ? (
          <ul className="navbar-nav left-nav ">
            <li className="nav-item mr-4">
              <Link to="/profile">
                <span className="badge badge-warning initials mt-3">
                  {initials}
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={signOut}
                to="/signin"
                style={{ color: "black" }}
                id="t"
              >
                Logout
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav left-nav ">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/signin"
                style={{ color: "black" }}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/signup"
                style={{ color: "black" }}
              >
                Sign up
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
