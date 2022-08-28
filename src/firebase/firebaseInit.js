import firebase from "firebase/app";
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBXSRE8GDJWjkvktDq1xe-T5nQWbFyF2G4",
  authDomain: "dawitblogs.firebaseapp.com",
  projectId: "dawitblogs",
  storageBucket: "dawitblogs.appspot.com",
  messagingSenderId: "353132372472",
  appId: "1:353132372472:web:3e7f904a2f7f476a92760d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp }
export default firebaseApp.firestore();