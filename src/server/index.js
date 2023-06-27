import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwoaU-eEo9LSZk1wIAJuSgJPMW-Pb-noU",
  authDomain: "exam-473cd.firebaseapp.com",
  projectId: "exam-473cd",
  storageBucket: "exam-473cd.appspot.com",
  messagingSenderId: "455812484726",
  appId: "1:455812484726:web:6f7fc502f8d96b83175957",
  measurementId: "G-STXDHXL90D",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
