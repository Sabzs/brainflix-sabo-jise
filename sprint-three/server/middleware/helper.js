const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

function writeJSONFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
        if (err) {
        }
    });
}
/*
* Async readFile, requires callback to send response
*/
function loadVideoData(callback) {
    fs.readFile("./data/videos.json", (err, data) => {
        if (err) throw err;
        const videos = JSON.parse(data);
        callback(videos);
    });
}

const timestamp = () => {
    return Date.now();
};

const getNewId = () => {
    return uuidv4();
};

module.exports = {
    loadVideoData,
    getNewId,
    timestamp,
    writeJSONFile
}
