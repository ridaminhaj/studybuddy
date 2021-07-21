import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgFcn-1wO9dGbe_LJpb3s1IUdzRAwO1TY",
  authDomain: "studybuddy-orbital.firebaseapp.com",
  databaseURL:  "https://studybuddy-orbital-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:"studybuddy-orbital",
  storageBucket: "studybuddy-orbital.appspot.com",
  messagingSenderId: "125188870606",
  appId: "1:125188870606:web:a45863c734ceb377ea1b9f",
  measurementId: "G-2HEWT6XHC9"
}

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebaseApp;

