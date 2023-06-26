// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqRqvzkza03uUy6wVy7gz4xKMapzyFtfc",
  authDomain: "projectreact-a81ce.firebaseapp.com",
  projectId: "projectreact-a81ce",
  storageBucket: "projectreact-a81ce.appspot.com",
  messagingSenderId: "212685194977",
  appId: "1:212685194977:web:5f3ca4c848a1455e2c59a0",
  measurementId: "G-KGKCN7C0S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;