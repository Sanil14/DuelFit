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
        const checkQueue = await controller._checkInQueue(req.uid);
        if (checkQueue) return res.errorMessage(`Already in queue`);
        newqueueuser = db().ref(`/queue`).push()
        newqueueuser.set({
            uid: req.uid
        });
        const checkFull = await controller._checkQueueFull();
        if (checkFull) return res.success({ gamestarted: true })
        return res.success({ gamestarted: false });
    },

    _checkInQueue: async (user) => {
        const snapshot = await db().ref(`queue`).get();
        if (!snapshot.val()) return false;
        if (Object.values(snapshot.val()).filter(u => u.uid === user).length > 0) return true;
        return false;
    },

    _checkQueueFull: async () => {
        const snapshot = await db().ref('queue').get();
        if (Object.values(snapshot.val()).length === 2) {
            const uids = [Object.values(snapshot.val())[0].uid, Object.values(snapshot.val())[1].uid];
            await controller._startMatch(uids);
            await controller._resetQueue();
            return true;
        };
        return false;
    },

    _startMatch: async (uids) => {
        const datastructure = {
            "jj": {
                "5L7hL288O4YyDkT2m5A9Sk4Rq783": 10,
                "6OYEc44IjIVuhIaUntOe9rguM653": 10
            },
            "squats": {
                "5L7hL288O4YyDkT2m5A9Sk4Rq783": 10,
                "6OYEc44IjIVuhIaUntOe9rguM653": 20
            }
        }
    },

    _resetQueue: async () => {
        await db().ref('queue').remove();
    },

    _setupMatch: async (uids) => {

    }
}

module.exports = controller;