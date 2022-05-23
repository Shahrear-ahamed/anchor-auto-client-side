// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8VyMm3rYFfgvBxyIeSLovp_iaSZ0A2Ms",
  authDomain: "anchor-auto.firebaseapp.com",
  projectId: "anchor-auto",
  storageBucket: "anchor-auto.appspot.com",
  messagingSenderId: "468854626935",
  appId: "1:468854626935:web:cd2210c810924a84150472",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
