//This will be used to access the firebase from our project.


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm8txEmdjV1qA9iYVpDfcJYxkOhEGE6fs",
  authDomain: "netflixgpt-e136d.firebaseapp.com",
  projectId: "netflixgpt-e136d",
  storageBucket: "netflixgpt-e136d.firebasestorage.app",
  messagingSenderId: "191073613082",
  appId: "1:191073613082:web:eae782d7f3d16334fe28a3",
  measurementId: "G-CYTL9F27QD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();