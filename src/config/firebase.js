// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: "AIzaSyDPuYnl6hu9qx0t6TUVL1yxwjIyJ82JSkc",
    // authDomain: "react-todo-wmad6.firebaseapp.com",
    // projectId: "react-todo-wmad6",
    // storageBucket: "react-todo-wmad6.appspot.com",
    // messagingSenderId: "1022551329586",
    // appId: "1:1022551329586:web:16bb94b2fa8298d73f252b",
    // measurementId: "G-YVW7LLCPRV"
      apiKey: "AIzaSyAYL_C2uTKsIWZHrPHqv9D62hYdYu3DBac",
  authDomain: "bootcamp-93191.firebaseapp.com",
  projectId: "bootcamp-93191",
  storageBucket: "bootcamp-93191.appspot.com",
  messagingSenderId: "65246982285",
  appId: "1:65246982285:web:d55478f521e3e388dbb2c4",
  measurementId: "G-7B6L340H3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { analytics, auth, firestore }