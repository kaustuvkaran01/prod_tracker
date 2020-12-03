import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initializing Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDFYYuqn-KHCP3d3HyMd74heZnn4flaWnE",
    authDomain: "productivity-tracker-82375.firebaseapp.com",
    databaseURL: "https://productivity-tracker-82375.firebaseio.com",
    projectId: "productivity-tracker-82375",
    storageBucket: "productivity-tracker-82375.appspot.com",
    messagingSenderId: "438146413975",
    appId: "1:438146413975:web:b6b9639a59de09af0500d2",
    measurementId: "G-F4S19ZMYED"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;