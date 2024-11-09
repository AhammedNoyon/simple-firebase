// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZzCSiVkBMbAJivh_kpfGuCaehlzdyw2k",
  authDomain: "simple-firebase-8ee9c.firebaseapp.com",
  projectId: "simple-firebase-8ee9c",
  storageBucket: "simple-firebase-8ee9c.firebasestorage.app",
  messagingSenderId: "505267020984",
  appId: "1:505267020984:web:f30a52f388c9e5fc05804d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
