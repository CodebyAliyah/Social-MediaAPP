import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAKL6XLS8kh7w7s2fpTVFjWdNJVjHoviLc",
  authDomain: "facebook-colone-8a913.firebaseapp.com",
  projectId: "facebook-colone-8a913",
  storageBucket: "facebook-colone-8a913.appspot.com",
  messagingSenderId: "656016585450",
  appId: "1:656016585450:web:da4802531f4e65611add93",
  measurementId: "G-SR1BES6ZQE"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);