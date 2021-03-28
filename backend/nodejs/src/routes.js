const router = require("express").Router();
const { registerUser, getProfile, joinQueue, uploadExercise, queueStatus } = require("./controllers");
const { populateReq, userAuth } = require("./middleware");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: "../output/",
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, `${req.uid}.mp4`);
    }
});

const fileupload = multer({ storage: storage })

router.use(populateReq);

router.post('/user/register', registerUser);

router.get('/user/profile', userAuth, getProfile);

router.get('/game/joinqueue', userAuth, joinQueue);

router.get('/game/queuestatus', queueStatus);

router.post('/game/upload', userAuth, fileupload.single('exercise'), uploadExercise);

module.exports = router;