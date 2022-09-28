// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATAisAw5Pkbun2aPEsUjTAOx0SozAEKeE",
  authDomain: "oam-beer.firebaseapp.com",
  projectId: "oam-beer",
  storageBucket: "oam-beer.appspot.com",
  messagingSenderId: "126587394390",
  appId: "1:126587394390:web:467589a795746eb921def7",
  measurementId: "G-BXH35WYMQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)