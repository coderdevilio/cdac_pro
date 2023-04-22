// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy1DFnL35XCNIVlfMKL9VEbYoaxX_fJg4",
  authDomain: "cdacpro-f156e.firebaseapp.com",
  projectId: "cdacpro-f156e",
  storageBucket: "cdacpro-f156e.appspot.com",
  messagingSenderId: "266827351705",
  appId: "1:266827351705:web:d8ceee403dafdd4ab69a08",
  measurementId: "G-RC1088N586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 const googleProvider = new GoogleAuthProvider();

 const db = getFirestore(app);

 export { auth, googleProvider, db,app };
