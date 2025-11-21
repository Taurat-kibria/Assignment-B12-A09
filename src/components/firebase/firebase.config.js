// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC87lcouXL6tyx4XJx-H7ucddXEEIufq7U",
  authDomain: "green-nest-auth-ca9c7.firebaseapp.com",
  projectId: "green-nest-auth-ca9c7",
  storageBucket: "green-nest-auth-ca9c7.firebasestorage.app",
  messagingSenderId: "133144354850",
  appId: "1:133144354850:web:ef5304e42b18b402e96a7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);