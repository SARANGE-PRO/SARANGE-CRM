// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDEnZGjkOfZSaX5FzGR1cif2lIbFSfBmN0",
    authDomain: "sarange-pro.firebaseapp.com",
    projectId: "sarange-pro",
    storageBucket: "sarange-pro.firebasestorage.app",
    messagingSenderId: "663173287801",
    appId: "1:663173287801:web:79feba99d60aee6396a9a8",
    databaseURL: "https://sarange-pro-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
