import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBSnm4VQU9pqjuQBfelcTQsjRfLYRnD2Ck",
  authDomain: "job-box-8981f.firebaseapp.com",
  projectId: "job-box-8981f",
  storageBucket: "job-box-8981f.firebasestorage.app",
  messagingSenderId: "771241938856",
  appId: "1:771241938856:web:2670282db3efdb57f9979d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);