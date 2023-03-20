import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfHhI4OfH8_huoGsYm7Y2JhuBFxg0bV7Q",
  authDomain: "scheme-suvidha-admin.firebaseapp.com",
  projectId: "scheme-suvidha-admin",
  storageBucket: "scheme-suvidha-admin.appspot.com",
  messagingSenderId: "715131919811",
  appId: "1:715131919811:web:cfc0ba8804cf29d419b176",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
