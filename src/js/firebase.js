import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBD9ayZNi9iAbPgMFjP2MLQORXEKSdAjqs",
  authDomain: "line-clone-tutorial-308e1.firebaseapp.com",
  projectId: "line-clone-tutorial-308e1",
  storageBucket: "line-clone-tutorial-308e1.appspot.com",
  messagingSenderId: "118233158807",
  appId: "1:118233158807:web:5ce9ce8889c15b6c3645d2"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
