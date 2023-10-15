import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1tjKu061uyMIsprPMrothW6wxHMEe8ss",
  authDomain: "realtor-clone-react-3e2f4.firebaseapp.com",
  projectId: "realtor-clone-react-3e2f4",
  storageBucket: "realtor-clone-react-3e2f4.appspot.com",
  messagingSenderId: "444453546594",
  appId: "1:444453546594:web:a1163eb975c0406123ff3b",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
