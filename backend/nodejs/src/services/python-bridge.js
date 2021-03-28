const chokidar = require("chokidar");
const path = require("path");
const fs = require("fs");
const events = require("events"),
    eventEmitter = new events.EventEmitter();

const watcher = chokidar.watch(path.join(__dirname, "../../../output"), { persistent: true });

module.exports.initialize = function () {
    console.log(`Initialized Watching For Python Responses`);
    let fileIDArr = []
    watcher.on('add', filePath => {
        console.log(`${filePath} file was added`);
        if (filePath.endsWith('.mp4')) {
            let fileName = path.basename(filePath);
            var fileID = fileName.slice(0, fileName.length - 4);
            fileIDArr.push(fileID)
            console.log(fileIDArr);
        }
        if (filePath.endsWith('.txt')) {
            let fileName = path.basename(filePath)
            var fileID = fileName.slice(0, fileName.length - 4)
            if (fileIDArr.indexOf(fileID) > -1) {
                fs.readFile(filePath, 'utf8', (error, contents) => {
                    if (error) return console.log(error);
                    eventEmitter.emit("reps", contents);
                    fs.unlink(filePath, (err) => {
                        fileIDArr.splice(fileIDArr.indexOf(fileName), 1);
                        if (err) return console.log(err);
                        console.log(`Removed TXT File`);
                    })
                })
            }
        }
    })
}

module.exports.eventEmitter = eventEmitter;