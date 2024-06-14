// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYr-reZZoGN0XY7FZo1cXcH_jlXqSaPNI",
  authDomain: "internationalbuddy2018.firebaseapp.com",
  projectId: "internationalbuddy2018",
  storageBucket: "internationalbuddy2018.appspot.com",
  messagingSenderId: "377754531085",
  appId: "1:377754531085:web:b4e0356c956ad0fee1ec44",
  measurementId: "G-DEPVPJM152"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize FCM
export const messaging = getMessaging(app);
