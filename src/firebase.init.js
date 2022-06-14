// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCH6YQoaWyKbIK1brJ7MQYW8LPKvUEL3oI",
    authDomain: "car-mechanics-project-65360.firebaseapp.com",
    projectId: "car-mechanics-project-65360",
    storageBucket: "car-mechanics-project-65360.appspot.com",
    messagingSenderId: "397501127723",
    appId: "1:397501127723:web:5b688e7bfbf28dbee19e6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
