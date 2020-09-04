import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import config from "../firebase/firebase.utils";

// export const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reduxFirestore(config),
//     reactReduxFirebase(config, {
//       useFirestoreForProfile: true,
//       userProfile: "users",
//       attachAuthIsReady: true,
//     })
//   )
// );

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(config),
    reactReduxFirebase(config, {
      useFirestoreForProfile: true,
      userProfile: "users",
      attachAuthIsReady: true,
    })
  )
);
