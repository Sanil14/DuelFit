const { admin } = require("./services/firebase-auth");

module.exports = {
    populateReq: async (req, res, next) => {
        if (req.headers.authorization &&
            req.headers.authorization.split(' ')[0] === "Bearer") {
            req.token = req.headers.authorization.split(' ')[1];
        } else {
            req.token = null;
        }
        next()
    },
    userAuth: async (req, res, next) => {
        try {
            const { token } = req;
            const userInfo = await admin().auth().verifyIdToken(token);
            req.uid = userInfo.uid;
            return next();
        } catch (e) {
            console.log(e);
            return res.unAuthorized();
        }
    }
}