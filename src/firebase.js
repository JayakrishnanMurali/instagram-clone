import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyBAcmZlJ6w7pN7hunPHz68ZB3ku-UGUJnc",
  authDomain: "instagram-clone-46900.firebaseapp.com",
  projectId: "instagram-clone-46900",
  storageBucket: "instagram-clone-46900.appspot.com",
  messagingSenderId: "701605770750",
  appId: "1:701605770750:web:9c34587e70723ade627caf",
  measurementId: "G-S1VT8NQPK2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
