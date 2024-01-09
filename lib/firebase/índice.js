import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyChMWagSNTFhF-MYuSuIZFBLv1lP_ui9Uc",
  authDomain: "gasto-gestor.firebaseapp.com",
  projectId: "gasto-gestor",
  storageBucket: "gasto-gestor.appspot.com",
  messagingSenderId: "151305029472",
  appId: "1:151305029472:web:762a3bbbe1e1b6517a4005"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db}