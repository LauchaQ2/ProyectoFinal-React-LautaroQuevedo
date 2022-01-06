import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBTCH_1n7YVNU5lyH9OtJ5sCJm8xNWyz3Q",
  authDomain: "ecommerce-lautaroquevedo.firebaseapp.com",
  projectId: "ecommerce-lautaroquevedo",
  storageBucket: "ecommerce-lautaroquevedo.appspot.com",
  messagingSenderId: "242522284297",
  appId: "1:242522284297:web:0df6793ab22407937273d8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;