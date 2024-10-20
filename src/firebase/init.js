// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPYMeTASjSzN4dU_BsSVyKyee3RtfYIOw",
  authDomain: "week7-shreya-80875.firebaseapp.com",
  projectId: "week7-shreya-80875",
  storageBucket: "week7-shreya-80875.appspot.com",
  messagingSenderId: "72158986081",
  appId: "1:72158986081:web:d3c35f5568641fc6a1cf20"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db