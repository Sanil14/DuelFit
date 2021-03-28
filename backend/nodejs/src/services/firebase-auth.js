const firebase = require("firebase/app");
const admin = require("firebase-admin");
const serviceAccount = require("../config/firebase-admin.json");
require("firebase/auth");
require("firebase/database");
var auth,
    database,
    adminExp;

module.exports.initialize = function () {
    console.log(`Initialized Firebase App`)
    firebase.initializeApp({
        authDomain: "duelfit-717ca.firebaseapp.com",
        databaseURL: "https://duelfit-717ca-default-rtdb.europe-west1.firebasedatabase.app",
        storageBucket: "users.appspot.com",
        apiKey: "AIzaSyA3usY-JJ58JcqMe8Qe9eXH_SJM_vV_zoU"
    });
    adminExp = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    auth = firebase.auth();
    database = firebase.database();
    adminExp = admin;
}

module.exports.auth = function () {
    return auth
}

module.exports.admin = function () {
    return adminExp;
}

module.exports.db = function () {
    return database;
}

// databaseURL: 'https://duelfit-717ca-default-rtdb.europe-west1.firebasedatabase.app'
