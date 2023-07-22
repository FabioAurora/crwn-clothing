/* 1 -This utility file allows me to control the large majority of how my application interfaces with this external service. (in this case is firebase / fireStore).
    2- Allows me to create the separation layer between my frontend and the services it relies on.
*/
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9vtpWXXl6-V5bQGHzQjfpfknWScZblSY",
  authDomain: "testing-dd3f3.firebaseapp.com",
  projectId: "testing-dd3f3",
  storageBucket: "testing-dd3f3.appspot.com",
  messagingSenderId: "969559002572",
  appId: "1:969559002572:web:86b9eb468591f381a3a169",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

/* ***************************** */
// Google provider setup
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

/* *************************** */
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists())

// TODO :
// if user data does not exist
// create / set the document with the data from userAuth in my collection
if (!userSnapshot.exists()) { 
  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInformation,
    });
  } catch (error) {
    console.log('Error creating the user', error.message)
  }
}

return userDocRef;
};

/* ***************************** */
export const createAuthUserWithEmailAndPassword =  async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}