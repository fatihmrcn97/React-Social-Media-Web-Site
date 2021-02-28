import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBHn1TttUyF3tsIVS7rlqdjANV4gsX7Amo",
    authDomain: "socialmediaapp-b3579.firebaseapp.com",
    databaseURL: "https://socialmediaapp-b3579.firebaseio.com",
    projectId: "socialmediaapp-b3579",
    storageBucket: "socialmediaapp-b3579.appspot.com",
    messagingSenderId: "274667879029",
    appId: "1:274667879029:web:d39b2f36917c19cfd0d63c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const firebasedb = firebase.database();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth,provider,storage,firebasedb};