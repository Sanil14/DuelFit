const chokidar = require("chokidar");
const path = require("path");
const fs = require("fs");

const watcher = chokidar.watch(path.join(__dirname, "../../../output"), { persistent: true });

module.exports.initialize = function () {
    console.log(`Initialized Watching For Python Responses`);
    let idarr = []
    watcher.on('add', p => {

        console.log(`${p} file was added`);
        if (p.endsWith('.mp4')) {
            let opath = path.basename(p)
            var id = opath.slice(0, opath.length - 4)
            idarr.push(id)
        }

        if (p.endsWith('.txt')) {
            let ppath = path.basename(p)
            var id = ppath.slice(0, ppath.length - 4)
            var bol = idarr.indexOf("id")
            if (bol > -1) {

            } 
            fs.readFile(p,'utf8',(error,pp) => {
                console.log(pp)
            })

        }

    })
}