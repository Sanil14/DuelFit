const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./src/config/config");
const routes = require("./src/routes");
const whitelistedURLs = [config.frontendURL];
const firebase = require("./src/services/firebase-auth");
firebase.initialize();

// Response Extensions
app.use((_, res, next) => {
    res.errorMessage = (message) => res.status(200).json({ success: false, message: message });
    res.successMessage = (message) => res.status(200).json({ success: true, message: message });
    res.unAuthorized = () => res.status(403).json({ success: false, message: 'Unauthorized Request' });
    res.success = (responseObj) => {
        const obj = responseObj;
        obj.success = true;
        res.status(200).json(obj);
    };
    res.fail = (responseObj) => {
        const obj = responseObj;
        obj.success = false;
        res.status(200).json(obj);
    };
    res.crash = (error) => res.status(500).json({ error });
    next();
});
app.set('trust proxy', true);
app.use(cors({
    origin: function (origin, callback) {
        if (whitelistedURLs.indexOf(origin) !== -1 || origin === undefined || origin.endsWith(".fighttm.com")) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS. URL: ' + origin));
        }
    },
    optionsSuccessStatus: 200,
    credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(config.port, (err) => {
    if (err) return console.log(err);
    console.log(`Listening to port ${config.port}`);
});