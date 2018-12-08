import firebase from "firebase";

export function firebaseConnect() {
  firebase.initializeApp({
    apiKey: "AIzaSyD_FflCn3Cr56SFCbPXF-wI7HbZrsxre7o",
    authDomain: "appparking-20b68.firebaseapp.com",
    databaseURL: "https://appparking-20b68.firebaseio.com",
    projectId: "appparking-20b68",
    storageBucket: "appparking-20b68.appspot.com",
    messagingSenderId: "66979025771"
  });
}
