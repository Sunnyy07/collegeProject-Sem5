import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBIVyEYQ2WFTZUH0R4TstsYQ7M4zXlPAzw",
  authDomain: "miniproject-d31d9.firebaseapp.com",
  databaseURL: "https://miniproject-d31d9-default-rtdb.firebaseio.com",
  projectId: "miniproject-d31d9",
  storageBucket: "miniproject-d31d9.appspot.com",
  messagingSenderId: "984144097561",
  appId: "1:984144097561:web:bce21f48bcb7565a40d588",
  measurementId: "G-XCYR4JW0JB"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
export default db;