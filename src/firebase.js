// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL3unl4CmwxTcVfxTcIO3qO8Zos76mtHM",
  authDomain: "breeze-c4025.firebaseapp.com",
  projectId: "breeze-c4025",
  storageBucket: "breeze-c4025.appspot.com",
  messagingSenderId: "448526078540",
  appId: "1:448526078540:web:57112f930ce4638d8d1ae9",
  measurementId: "G-0KZVBM638S",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
