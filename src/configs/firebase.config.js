import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

firebase.initializeApp({
    apiKey: "AIzaSyAJa44yZT7pKEhciYHuGCfjlRrt9zXmPbI",
      authDomain: "chat-app-3a237.firebaseapp.com",
      projectId: "chat-app-3a237",
      storageBucket: "chat-app-3a237.appspot.com",
      messagingSenderId: "115801496665",
      appId: "1:115801496665:web:22f38df998865417e7e548"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

export{auth,firestore,firebase}