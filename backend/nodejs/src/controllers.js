const { db, auth } = require("./services/firebase-auth");

const controller = {
    registerUser: async (req, res) => {
        try {
            const { name, email, password, weight, height, fitness } = req.body;
            if (!name || !email || !password || !weight || !height || !fitness) return res.unAuthorized();
            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            const response = db().ref(`/users/${user.uid}`).set({
                name,
                email,
                weight,
                height,
                fitness
            });
            return res.success(response);
        } catch (err) {
            console.log(err);
            return res.errorMessage(err.message);
        }
    },

    getProfile: async (req, res) => {
        db().ref(`users`).child(req.uid).get().then(function (snapshot) {
            if (!snapshot.exists()) return res.errorMessage(`User was not found`);
            return res.success(snapshot.val());
        }).catch(function (err) {
            console.log(err);
            return res.errorMessage(`Error`);
        });
    },

    joinQueue: async (req, res) => {
        newqueueuser = db().ref(`/queue`).push()
        newqueueuser.set({
            uid: req.uid
        });
    },

    _checkInQueue: async () => {
        const snapshot = await db().ref(`queue`).get();
        console.log(snapshot.val());
    }
}

module.exports = controller;