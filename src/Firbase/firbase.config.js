import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyButsRO6YuUmcba1wHWU3aaDL4PIevwyjA",
  authDomain: "halaljibika-web-app.firebaseapp.com",
  projectId: "halaljibika-web-app",
  storageBucket: "halaljibika-web-app.appspot.com",
  messagingSenderId: "579146386142",
  appId: "1:579146386142:web:0894819b73c5fd0880d04f",
  measurementId: "G-W8EESWL415"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth (app)