import firebase from "firebase/app";
import "firebase/auth";

const config = {
    authDomain: "duelfit-717ca.firebaseapp.com",
    databaseURL: "https://duelfit-717ca-default-rtdb.europe-west1.firebasedatabase.app",
    storageBucket: "users.appspot.com",
    apiKey: "AIzaSyA3usY-JJ58JcqMe8Qe9eXH_SJM_vV_zoU"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export default firebase;