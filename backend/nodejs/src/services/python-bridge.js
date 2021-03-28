const chokidar = require("chokidar");
const path = require("path");
const somthing = require("../../../output")

const watcher = chokdar.watch(path.join(__dirname, "../../../output"), { persistent: true });

module.exports.initialize = function () {
    console.log(`Initialized Watching For Python Responses`);

    watcher.on('add', path => {
        if (path.endsWith(".txt")) {
            console.log(`${path} file was added`);
        }
    })
}