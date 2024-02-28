import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoW4EUHvFRT4Cg6h0uurmXB4aiaAA6Iz4",
  authDomain: "clone-152c2.firebaseapp.com",
  projectId: "clone-152c2",
  storageBucket: "clone-152c2.appspot.com",
  messagingSenderId: "43288179197",
  appId: "1:43288179197:web:bfdec56b08aa614cefa994"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const provider = new GoogleAuthProvider()

export default app;