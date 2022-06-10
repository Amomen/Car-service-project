// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkDPx4vXl9cwXwQgvAvMx3P6FZSvNLxTM",
    authDomain: "genius-car-services-276be.firebaseapp.com",
    projectId: "genius-car-services-276be",
    storageBucket: "genius-car-services-276be.appspot.com",
    messagingSenderId: "128602157902",
    appId: "1:128602157902:web:b86eb8f4034590f8dba41f",
    measurementId: "G-8YFLZ0RKB0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
