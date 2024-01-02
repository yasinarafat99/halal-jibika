// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDiN6SyynyR2rMtDAUGMFJ7GsqVs60_80s",
  authDomain: "halal-jibika-7bc61.firebaseapp.com",
  projectId: "halal-jibika-7bc61",
  storageBucket: "halal-jibika-7bc61.appspot.com",
  messagingSenderId: "239951708895",
  appId: "1:239951708895:web:0eba8a13c805bd0e889f6a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)