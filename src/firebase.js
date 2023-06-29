import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8IZ5z2R_EUtND7Q4QmZhpCCa3Vn4_t6A",
  authDomain: "todo-book-67ea4.firebaseapp.com",
  projectId: "todo-book-67ea4",
  storageBucket: "todo-book-67ea4.appspot.com",
  messagingSenderId: "965462504671",
  appId: "1:965462504671:web:70b50381cd46238c1be56a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)