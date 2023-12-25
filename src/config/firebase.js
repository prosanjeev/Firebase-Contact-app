import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN2IjoE4jhPXSiL9IlPn9QaAprQCdDQLg",
  authDomain: "react-contact-dabd2.firebaseapp.com",
  projectId: "react-contact-dabd2",
  storageBucket: "react-contact-dabd2.appspot.com",
  messagingSenderId: "699426357246",
  appId: "1:699426357246:web:720518ddea75ea9f45caaf",
  measurementId: "G-H5ZZWVPPK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);