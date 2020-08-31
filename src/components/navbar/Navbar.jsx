import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./navbar.style.scss";

import { signOut } from "../../redux/auth/auth-actions";

function Navbar(props) {
  const { auth, signOut, profile } = props;

  const initials = profile ? profile.initials : null;

  return (
    <nav className="mb-1 navbar  navbar-expand-lg navbar-dark default-color nav-container  b">
      <Link to="/" className="navbar-brand b" href="index.html">
        <h3>Home</h3>
      </Link>
      <button
        className="navbar-toggler"
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
        className="collapse navbar-collapse b"
        id="navbarSupportedContent-333"
      >
        <ul className="navbar-nav directory b">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink-333"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About
            </a>
            <div
              className="dropdown-menu dropdown-default"
              aria-labelledby="navbarDropdownMenuLink-333"
            >
              <a className="dropdown-item" href="dispatch_comp.html">
                Services
              </a>
              <a className="dropdown-item" href="rider.html">
                Company
              </a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>

        {auth.uid ? (
          <ul className="navbar-nav left-nav b">
            <li className="nav-item mr-4">
              <Link to="/profile">
                <span className="badge badge-warning initials mt-3">
                  {initials}
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={signOut}>
                Logout
              </a>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav left-nav b">
            {/* <li className="nav-item mr-4">
              <span className="badge badge-warning initials"></span>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/signin">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
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
