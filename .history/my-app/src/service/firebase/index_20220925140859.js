// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.evd.REACT_API_FIREBASE_APIKEY,
  authDomain: process.evd.REACT_API_FIREBASE_AUTHDOMAIN,
  projectId:process.evd.REACT_API_FIREBASE_PROJECTID,
  storageBucket:process.evd.REACT_API_FIREBASE_STORAGEBUCKET,
  messagingSenderId:process.evd.REACT_API_FIREBASE_MESSAGINGSENDERID,
  appId:process.evd.REACT_API_FIREBASE_APPID,
  measurementId:process.evd
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)