import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyACDTkSfYWRoXWzm5RdYVeMPFvIinUhp74",
  authDomain: "lol-firebase-9a8da.firebaseapp.com",
  projectId: "lol-firebase-9a8da",
  storageBucket: "lol-firebase-9a8da.appspot.com",
  messagingSenderId: "112783246768",
  appId: "1:112783246768:web:10f658f15235c4dbcb0275",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const storage = firebase.storage();
const auth = firebase.auth();
const db = firebaseApp.firestore();
export { auth, db, timestamp, storage };
export default firebaseApp.firestore();
