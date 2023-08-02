import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAi5iOWoo1VI4DbcvRUt9vnqRggorMCGLo",
  authDomain: "taskify-a4667.firebaseapp.com",
  databaseURL: "https://taskify-a4667-default-rtdb.firebaseio.com",
  projectId: "taskify-a4667",
  storageBucket: "taskify-a4667.appspot.com",
  messagingSenderId: "461008754026",
  appId: "1:461008754026:web:550e0b3776b1efbb8d8113",
  measurementId: "G-N6D2JBTMLE",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const analytics = getAnalytics(app);
export const fireStore = getFirestore(app);

