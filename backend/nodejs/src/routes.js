const router = require("express").Router();
const { registerUser, getProfile, joinQueue } = require("./controllers");
const { populateReq, userAuth } = require("./middleware");

router.use(populateReq);

router.post('/user/register', registerUser);

router.get('/user/profile', userAuth, getProfile);

router.get('/game/joinqueue', userAuth, joinQueue);

module.exports = router;