// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAjf9hHRojq3X1x7aihWdbuZs775aO3VA",
  authDomain: "netflixgpt-c94c8.firebaseapp.com",
  projectId: "netflixgpt-c94c8",
  storageBucket: "netflixgpt-c94c8.appspot.com",
  messagingSenderId: "1027262613325",
  appId: "1:1027262613325:web:12e3ef5cb463bc4fe5d904",
  measurementId: "G-7L1JLKRQ0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();