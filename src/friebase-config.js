// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDct3PsbGmNmnIBfh8kaK8Rz0Fwm-WcfsE",
  authDomain: "blogproject-24698.firebaseapp.com",
  projectId: "blogproject-24698",
  storageBucket: "blogproject-24698.appspot.com",
  messagingSenderId: "772778291692",
  appId: "1:772778291692:web:0f4993c3ee7cad7e01d0c9",
  measurementId: "G-HKXBLKK5K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();
 

