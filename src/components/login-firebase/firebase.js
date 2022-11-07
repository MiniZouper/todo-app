// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2wbAxTyGt6ILgfrP509trKPbx_Vz56zE",
  authDomain: "login-to-do.firebaseapp.com",
  projectId: "login-to-do",
  storageBucket: "login-to-do.appspot.com",
  messagingSenderId: "1024838549390",
  appId: "1:1024838549390:web:30f43096414b64f0d8aedf",
  measurementId: "G-C7H4L3RBQZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth, app };
