const initialState = {
  loginError: null,
  signupError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("error login");
      return {
        ...state,
        loginError: action.error.message,
      };

    case "LOGIN_SUCCESS":
      console.log("successful");
      return {
        ...state,
        loginError: null,
      };

    case "SIGNOUT_SUCCESS":
      console.log("sign out success");
      return state;

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        signupError: null,
      };
    case "SIGNUP_ERROR":
      console.log("signup ERROR");
      return {
        ...state,
        signupError: action.error.message,
      };

    default:
      return state;
  }
};

export default authReducer;
