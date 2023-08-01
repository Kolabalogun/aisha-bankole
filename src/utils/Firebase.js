import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,

  // apiKey: "AIzaSyA8bjKmLo7ADtWc8zcvEIMWpBXnV038aM0",
  // authDomain: "aisha-bankole.firebaseapp.com",
  // projectId: "aisha-bankole",
  // storageBucket: "aisha-bankole.appspot.com",
  // messagingSenderId: "964549924786",
  // appId: "1:964549924786:web:b27094f7d788417a8436ab",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
