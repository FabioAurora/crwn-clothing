import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZ7v1GcdBctVYOiT662OhrNEU4TqkeYrA",
  authDomain: "crwn-clothing-db-86032.firebaseapp.com",
  projectId: "crwn-clothing-db-86032",
  storageBucket: "crwn-clothing-db-86032.appspot.com",
  messagingSenderId: "252998619911",
  appId: "1:252998619911:web:7269c084574d5aa6ac6ba2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})