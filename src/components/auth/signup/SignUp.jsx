import React, { Component } from "react";
import { signUp } from "../../../redux/auth/auth-actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./signup.style.scss";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
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
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="sign-up">
        {" "}
        <div className="row row-height  align-items-center">
          <div className="col-md-12  d-flex justify-content-center ">
            <form onSubmit={this.handleSubmit}>
              {authError ? authError : null}
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="inputEmail4">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control form__input"
                    id="inputEmail4"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="First Name">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    className="form-control form__input "
                    id="firstName"
                    placeholder="First Name"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    className="form-control form__input"
                    id="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control form__input"
                    id="inputPassword4"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Confirm Password</label>
                  <input
                    name="confirmPassword"
                    type="password"
                    className="form-control form__input"
                    id="inputPassword4"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Sign Up
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
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
