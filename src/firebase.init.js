// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQ7NoHCDAmx5TwQmfHim7cunQU8j-pv2o",
  authDomain: "job-box-2.firebaseapp.com",
  projectId: "job-box-2",
  storageBucket: "job-box-2.firebasestorage.app",
  messagingSenderId: "163655436682",
  appId: "1:163655436682:web:807816c1c70c7a830ea073"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);