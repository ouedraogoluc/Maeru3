import  firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBAJQEpFf-4pjSLWargItLSb7CfUnlFmtI",
    authDomain: "mareu-d6cf3.firebaseapp.com",
    databaseURL: "https://mareu-d6cf3-default-rtdb.firebaseio.com",
    projectId: "mareu-d6cf3",
    storageBucket: "mareu-d6cf3.appspot.com",
    messagingSenderId: "4055194588",
    appId: "1:4055194588:web:8eadf8da135f0721408d19",
    measurementId: "G-FX9J7CSXQ8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;
