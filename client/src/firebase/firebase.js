
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhkbL3Fp-lh0ZJfuDfD-hjS9Cj8LtOl5o",
  authDomain: "shooping-12731.firebaseapp.com",
  projectId: "shooping-12731",
  storageBucket: "shooping-12731.firebasestorage.app",
  messagingSenderId: "624616189983",
  appId: "1:624616189983:web:cf27eb42b99e6e9a60252a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };