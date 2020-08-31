const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("error login");
      return {
        ...state,
        authError: "login failed",
      };

    case "LOGIN_SUCCESS":
      console.log("successful");
      return {
        ...state,
        authError: null,
      };

    case "SIGNOUT_SUCCESS":
      console.log("sign out success");
      return state;

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("signup ERROR");
      return {
        ...state,
        authError: action.error.message,
      };

    default:
      return state;
  }
};

export default authReducer;
