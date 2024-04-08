// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwNuprY4g_cP8BY-XP5sgnWovlt1AcUgE",
  authDomain: "user-email-password-auth-3fa84.firebaseapp.com",
  projectId: "user-email-password-auth-3fa84",
  storageBucket: "user-email-password-auth-3fa84.appspot.com",
  messagingSenderId: "613763270740",
  appId: "1:613763270740:web:c35a39ea4a448821d5c5c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;