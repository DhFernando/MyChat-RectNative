import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC1ZrwBaghWPaFnzFZHw_K70FWFW8QAwyY",
    authDomain: "chatapp-ea8a3.firebaseapp.com",
    databaseURL: "https://chatapp-ea8a3.firebaseio.com",
    projectId: "chatapp-ea8a3",
    storageBucket: "chatapp-ea8a3.appspot.com",
    messagingSenderId: "502908387801",
    appId: "1:502908387801:web:919f0188f31b31349319c8",
    measurementId: "G-JCB552SVWW"
  };
  
  // Initialize Firebase
  export const fb =  firebase.initializeApp(firebaseConfig);