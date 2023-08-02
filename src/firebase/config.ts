// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY_f6xxvm7f5T1v81cBD5sAnU-KHvT21g",
  authDomain: "luma-88e68.firebaseapp.com",
  projectId: "luma-88e68",
  storageBucket: "luma-88e68.appspot.com",
  messagingSenderId: "396462570335",
  appId: "1:396462570335:web:4ba68005a66c17464c14ea",
  measurementId: "G-R7D2708NZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const db = getFirestore(app)


export default app
export {
    auth,
    googleProvider,
    db,
}



