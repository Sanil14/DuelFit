const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
var database;

module.exports.initialize = function () {
    console.log(`Initialized Firebase App`)
    firebase.initializeApp({
        authDomain: "duelfit-717ca.firebaseapp.com",
        databaseURL: "https://duelfit-717ca-default-rtdb.europe-west1.firebasedatabase.app",
        storageBucket: "users.appspot.com"
    });
    database = firebase.database();
}

module.exports.db = function () {
    return database
}

// databaseURL: 'https://duelfit-717ca-default-rtdb.europe-west1.firebasedatabase.app'
