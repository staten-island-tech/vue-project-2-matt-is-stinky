import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";
import { getStorage } from "firebase/storage";

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
const storage = getStorage(firebaseApp);
const auth = firebase.auth();
const db = firebaseApp.firestore();
export { auth, db, timestamp, storage };
export default firebaseApp.firestore();
