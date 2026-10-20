
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCq-zvaijED4ZuNNhaJBKB33wHwTfE9L5U",
  authDomain: "panol-eest4-new.firebaseapp.com",
  projectId: "panol-eest4-new",
  storageBucket: "panol-eest4-new.firebasestorage.app",
  messagingSenderId: "967082997203",
  appId: "1:967082997203:web:30ebb05319d16cd5116b26",
  measurementId: "G-S696LVF38S"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
