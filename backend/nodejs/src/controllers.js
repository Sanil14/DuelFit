const { db, auth } = require("./services/firebase-auth");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: "../output/",
    filename: function (req, res, cb) {
        cb(null, `${req.uid}_${req.body.type}.mp4`);
    }
});

const fileupload = multer({ storage: storage })

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

    queueStatus: async (req, res) => {
        const checkFull = await controller._checkQueueFull();
        if (checkFull) return res.success({ gamestarted: true })
        res.success({ gamestarted: false });
    },

    uploadExercise: async (req, res) => {
        const { type } = req.body;
        if (type != "jj" || type != "squats") return res.unAuthorized();

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
                [uids[0]]: 0,
                [uids[1]]: 0,
            },
            "squats": {
                [uids[0]]: 0,
                [uids[1]]: 0,
            }
        }
        db().ref(`/matches/${await controller._getMatchID()}`).set(datastructure);
    },

    _getMatchID: async () => {
        const snapshot = await db().ref('matches').get();
        if (!snapshot.val()) return 1;
        return Object.values(snapshot.val()).length + 1;
    },

    _resetQueue: async () => {
        await db().ref('queue').remove();
    },

    _setupMatch: async (uids) => {

    }
}

module.exports = controller;