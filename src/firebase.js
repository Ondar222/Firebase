// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmRwGBqiwb1C2ehbmAbZ4R-6SbbAve7B8",
  authDomain: "fir-37e28.firebaseapp.com",
  projectId: "fir-37e28",
  storageBucket: "fir-37e28.firebasestorage.app",
  messagingSenderId: "210805467420",
  appId: "1:210805467420:web:bb17b855eb74ac919cf2d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
