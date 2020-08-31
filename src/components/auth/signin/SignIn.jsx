import React, { Component } from "react";
import { signIn } from "../../../redux/auth/auth-actions";
import { connect } from "react-redux";
import "./signin.style.scss";
import { Redirect } from "react-router-dom";
class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;

    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="sign-in">
        <div className="row row-height  align-items-center">
          <div className="col-md-12  d-flex justify-content-center ">
            <form onSubmit={this.handleSubmit}>
              {authError ? authError : null}
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control form_input"
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                />
                <small id="emailHelp" className="m">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control form_input"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1598337763">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credential) => dispatch(signIn(credential)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
