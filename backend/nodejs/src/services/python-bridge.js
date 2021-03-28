const chokidar = require("chokidar");
const path = require("path");
const fs = require("fs");

const watcher = chokidar.watch(path.join(__dirname, "../../../output"), { persistent: true });

module.exports.initialize = function () {
    console.log(`Initialized Watching For Python Responses`);

    watcher.on('add', path => {
        if (path.endsWith(".txt")) {
            console.log(`${path} file was added`);
        }
        if (path.endsWith(".mp4")) {
            
        }
    })
}