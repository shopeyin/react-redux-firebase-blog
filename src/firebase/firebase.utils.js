import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyDsmCM0fl40OU6qIex9Fl_rCdyb4Pl61yk",
  authDomain: "blogg-646d1.firebaseapp.com",
  databaseURL: "https://blogg-646d1.firebaseio.com",
  projectId: "blogg-646d1",
  storageBucket: "blogg-646d1.appspot.com",
  messagingSenderId: "828427574208",
  appId: "1:828427574208:web:e07123fa72c4e1dcc90625",
  measurementId: "G-EZCF88XRQ8",
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();
const storage = firebase.storage();
export { storage, firebase as default };
