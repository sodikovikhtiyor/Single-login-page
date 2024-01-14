// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZgMF8YFB4XNVUGCof-GhNBHud7sLV1EY",
  authDomain: "singleloginpage-cb2cd.firebaseapp.com",
  databaseURL: "https://singleloginpage-cb2cd-default-rtdb.firebaseio.com",
  projectId: "singleloginpage-cb2cd",
  storageBucket: "singleloginpage-cb2cd.appspot.com",
  messagingSenderId: "708315911477",
  appId: "1:708315911477:web:96425c6a7bd13dd5d0287c",
  measurementId: "G-HSXF1H5Y2D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
