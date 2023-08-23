// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAfJOAxmS9pM3xE9-oQUmqn8RWrUY5vbc",
  authDomain: "tecnoplay-78fb6.firebaseapp.com",
  projectId: "tecnoplay-78fb6",
  storageBucket: "tecnoplay-78fb6.appspot.com",
  messagingSenderId: "970375327226",
  appId: "1:970375327226:web:5d52fd747c249609650843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const bd = getFirestore(app);