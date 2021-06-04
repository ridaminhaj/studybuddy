import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

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
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const auth = app.auth()
export default app;

/*export const auth = firebaseConfig.auth()*/

