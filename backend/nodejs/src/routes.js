const router = require("express").Router();
const { registerUser } = require("./controllers");
const { populateReq } = require("./middleware");

router.use(populateReq);

router.post('/user/register', registerUser)

module.exports = router;