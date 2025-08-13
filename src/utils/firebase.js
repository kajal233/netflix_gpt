// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD9rdIhs5R4-lNFFJwzHN5kabAe0ehOOrc",
  authDomain: "netflixgpt-2db00.firebaseapp.com",
  projectId: "netflixgpt-2db00",
  storageBucket: "netflixgpt-2db00.appspot.com",
  messagingSenderId: "161721997192",
  appId: "1:161721997192:web:752117184009b8836ecc3d",
  measurementId: "G-C3PGDSE6N7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

