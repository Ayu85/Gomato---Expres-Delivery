// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmHvtE98ZTXpbExp4GRriqo1mUAqIfys8",
  authDomain: "gomoto-delivery.firebaseapp.com",
  projectId: "gomoto-delivery",
  storageBucket: "gomoto-delivery.appspot.com",
  messagingSenderId: "165015781626",
  appId: "1:165015781626:web:50a567976f033a02b58943",
  measurementId: "G-LMVY42SRNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
