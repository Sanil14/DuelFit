const admin = require("firebase-admin");
var firebaseadmin;

module.exports.initialize = function () {
    console.log(`Initialized Firebase App`)
    firebaseadmin = admin.initializeApp({
        credentials: {
            type: process.env.type,
            project_id: process.env.project_id,
            private_key_id: process.env.private_key_id,
            private_key: process.env.private_key,
            client_email: process.env.client_email,
            client_id: process.env.client_id,
            auth_url: process.env.auth_url,
            token_url: process.env.token_url,
            auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
            client_x509_cert_url: process.env.client_x509_cert_url
        },
        databaseURL: 'https://fitness-hackathon.firebaseio.com'
    });
}

module.exports.admin = function () {
    return firebaseadmin
}