import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQNvm89AgliUENb7GxPgXj6rnA1pZxnfA",
    authDomain: "clone-ba951.firebaseapp.com",
    databaseURL: "https://clone-ba951.firebaseio.com",
    projectId: "clone-ba951",
    storageBucket: "clone-ba951.appspot.com",
    messagingSenderId: "299282213904",
    appId: "1:299282213904:web:86944e37b22f39041a6e95",
    measurementId: "G-KH6E2YD1C7"

});
const db =firebaseApp.firestore();
const auth = firebase.auth();

export{  auth};