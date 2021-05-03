
import  firebase  from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyDzBbNaiVtq_ymD_Rqgx6HAky-pZers-k0",
    authDomain: "clone-d829f.firebaseapp.com",
    projectId: "clone-d829f",
    storageBucket: "clone-d829f.appspot.com",
    messagingSenderId: "126328191957",
    appId: "1:126328191957:web:1d66106769cbf2fde29b5c",
    measurementId: "G-0YGXCFC58E"
  };


const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth = firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export default db;
export {auth,provider}

