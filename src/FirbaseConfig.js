// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAwrkGHQsA5yDtzP01zxvx8WBCIqLHE2uM",
  authDomain: "cricket-react.firebaseapp.com",
  databaseURL: "https://cricket-react-default-rtdb.firebaseio.com",
  projectId: "cricket-react",
  storageBucket: "cricket-react.appspot.com",
  messagingSenderId: "223294502919",
  appId: "1:223294502919:web:9eff9feedbe0d95fb852a2",
  measurementId: "G-YSBMKPM69K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
