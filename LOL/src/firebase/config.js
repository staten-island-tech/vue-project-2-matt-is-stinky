import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAte6jm4Q3PBetuhK1Pm5L3ZGh9krJiz0",
  authDomain: "lol-firebase.firebaseapp.com",
  projectId: "lol-firebase",
  storageBucket: "lol-firebase.appspot.com",
  messagingSenderId: "692409329496",
  appId: "1:692409329496:web:3c033f83751a43969b272d",
};

initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
