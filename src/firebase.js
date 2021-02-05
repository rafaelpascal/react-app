import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjeTSNwkCSpBWDbEpcAFAmoaKAPb3q6lY",
  authDomain: "clone-826d1.firebaseapp.com",
  databaseURL: "https://clone-826d1.firebaseio.com",
  projectId: "clone-826d1",
  storageBucket: "clone-826d1.appspot.com",
  messagingSenderId: "11941411244",
  appId: "1:11941411244:web:604170eb49291e5cf06209",
  measurementId: "G-KES7X0X9R3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth};