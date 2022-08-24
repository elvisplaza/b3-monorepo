// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDi5viSoqhb8agsNSjaCLgrSt5VmbN9To",
  authDomain: "b3-how-to.firebaseapp.com",
  projectId: "b3-how-to",
  storageBucket: "b3-how-to.appspot.com",
  messagingSenderId: "1074315404098",
  appId: "1:1074315404098:web:c9a1953b5f0c46df6f1edb",
  measurementId: "G-PTS1THMYZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);