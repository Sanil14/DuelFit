const { admin } = require("./server");

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
    userAuth: (req, res, next) => {
        try {
            const { token } = req;
            const userInfo = await admin.auth().verifyIdToken(token);
            req.user.userid = userInfo.uid;
            return next();
        } catch (e) {
            return res.unAuthorized();
        }
    }
}