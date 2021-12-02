import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBajmR3KqOMy0URj8KDMvnwfuCvERX_4rY",
    authDomain: "linkedin-clone-39bc0.firebaseapp.com",
    projectId: "linkedin-clone-39bc0",
    storageBucket: "linkedin-clone-39bc0.appspot.com",
    messagingSenderId: "139475793217",
    appId: "1:139475793217:web:1af3a525755dcce02cddc0",
    measurementId: "G-5N33LWNLWY"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();

export default firebaseApp;
