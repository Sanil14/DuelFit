const { nanoid } = require("nanoid");
const { db } = require("./services/firebase-auth");

const controller = {
    registerUser: async (req, res) => {
        const { name, email, password, age, weight, height } = req.body;
        if (!name || !email || !password || !age || !weight || !height) return res.unAuthorized();
        const checkEmail = await module.exports._checkUserExists(email);
        if (checkEmail.found) return res.errorMessage(`This email already exists`);
        const response = db().ref(`users/${module.exports._generateID()}`).set({
            name,
            email,
            password,
            age,
            weight,
            height
        });
        return res.success(response);
    },

    _generateID: () => {
        return nanoid(5);
    },

    _checkUserExists: async (email) => {
        return new Promise((resolve, reject) => {
            var found = false;
            db().ref().child("users").get().then(function (data) {
                if (!data.val()) return resolve({ found })
                const d = Object.values(data.val());
                d.forEach(e => {
                    if (found) return;
                    if (e.email === email) return found = true;
                });
                resolve({ found });
            })
        })
    }
}

module.exports = controller;