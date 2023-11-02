// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, addDoc, collection, getDoc, getDocs, query, where, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Q9Mluav9De8PyTxt7u7PGK6BvUvZun0",
  authDomain: "proy-react-app04.firebaseapp.com",
  projectId: "proy-react-app04",
  storageBucket: "proy-react-app04.appspot.com",
  messagingSenderId: "900309723146",
  appId: "1:900309723146:web:9da580898ad9bcff2a17f3",
  measurementId: "G-EP7N3D1W0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);