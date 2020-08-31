import { combineReducers } from "redux";
import authReducer from "./auth/auth-reducer";
import blogReducer from "./blog/blog-reducer";
import imageReducer from "./image/image-reducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
  image: imageReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
