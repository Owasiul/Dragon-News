// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3kqJe8y9PveqYJsVh_t2Opw1eBvl6HQY",
  authDomain: "dragon-news-auth-a29c7.firebaseapp.com",
  projectId: "dragon-news-auth-a29c7",
  storageBucket: "dragon-news-auth-a29c7.firebasestorage.app",
  messagingSenderId: "172981569731",
  appId: "1:172981569731:web:cfa271fb4ba9f038513a76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
