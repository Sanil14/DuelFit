const router = require("express").Router();
const { registerUser, getProfile, joinQueue, uploadExercise, queueStatus } = require("./controllers");
const { populateReq, userAuth } = require("./middleware");

router.use(populateReq);

router.post('/user/register', registerUser);

router.get('/user/profile', userAuth, getProfile);

router.get('/game/joinqueue', userAuth, joinQueue);

router.get('/game/queuestatus', queueStatus);

router.post('/game/upload', userAuth, uploadExercise);

module.exports = router;