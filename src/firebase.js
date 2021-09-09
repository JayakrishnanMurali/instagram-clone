import firebase from 'firebase/compat'

const firebaseConfig = {
  apiKey: "AIzaSyBAcmZlJ6w7pN7hunPHz68ZB3ku-UGUJnc",
  authDomain: "instagram-clone-46900.firebaseapp.com",
  projectId: "instagram-clone-46900",
  storageBucket: "instagram-clone-46900.appspot.com",
  messagingSenderId: "701605770750",
  appId: "1:701605770750:web:553c00cf06ca70c8627caf",
  measurementId: "G-FBQXE2FHH6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;