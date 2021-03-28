const router = require("express").Router();
const { registerUser, getProfile } = require("./controllers");
const { populateReq, userAuth } = require("./middleware");

router.use(populateReq);

router.post('/user/register', registerUser);

router.get('/user/profile', userAuth, getProfile);

module.exports = router;