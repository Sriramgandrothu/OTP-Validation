// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCGTGVeU8BL1xpZDaVAlN1bcqVoybw-t7o",
  authDomain: "otp-gen-1ecdb.firebaseapp.com",
  projectId: "otp-gen-1ecdb",
  storageBucket: "otp-gen-1ecdb.appspot.com",
  messagingSenderId: "154587466077",
  appId: "1:154587466077:web:8cad0b1fda6a5c4b3480b4",
  measurementId: "G-8J4MB00DYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);