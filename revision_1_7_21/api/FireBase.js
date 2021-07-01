/*import firebase from "firebase/app";
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

export default firebaseApp;*/
























import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBGsQzknf2yehSWf40QBuAuMdz_QA38F1w",
    authDomain: "simplist-demo-5a157.firebaseapp.com",
    databaseURL: "https://simplist-demo-5a157-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "simplist-demo-5a157",
    storageBucket: "simplist-demo-5a157.appspot.com",
    messagingSenderId: "944127902758",
    appId: "1:944127902758:web:fcd19fadc76903098612e7",
    measurementId: "G-JHV019QKD6"
    /*apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID*/
}

/*if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); // if already initialized, use that one
}
firebase.analytics();*/
export const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

/*export const auth = app.auth()
firebase.firestore();*/

export default app;
/*export const auth = firebaseConfig.auth()*/

