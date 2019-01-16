import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyAglZF2LkwSgh9kaD_SXIX-nrtj-5AVQ-8",
    authDomain: "plans-book.firebaseapp.com",
    databaseURL: "https://plans-book.firebaseio.com",
    projectId: "plans-book",
    storageBucket: "",
    messagingSenderId: "395465391527"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});

export default config;