import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDPZGGXOux0pHDHc3RlIq7ujz7v0iiWJsA",
  authDomain: "cloneimessages.firebaseapp.com",
  projectId: "cloneimessages",
  storageBucket: "cloneimessages.appspot.com",
  messagingSenderId: "520748920018",
  appId: "1:520748920018:web:f2db30dd7c35426010510b",
  measurementId: "G-LHMK8KS42X"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;