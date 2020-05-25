import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDJzNPK_kv1rfSDT2uO0725BMaHXHT_IMI",
  authDomain: "crwn-clothing-eee33.firebaseapp.com",
  databaseURL: "https://crwn-clothing-eee33.firebaseio.com",
  projectId: "crwn-clothing-eee33",
  storageBucket: "crwn-clothing-eee33.appspot.com",
  messagingSenderId: "708341539239",
  appId: "1:708341539239:web:68212a586f5d2f21a4d682",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
