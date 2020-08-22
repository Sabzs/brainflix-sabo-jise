const fs = require("fs");
const uuid = require("uuid/v4");




function loadVideoData(callback) {
    fs.readFile('./data/videos.json', (err, data) => {
        if (err) throw err;
        const videos = JSON.parse(data);
        callback(videos);
    });
}

const getNewId = () => {
    return uuid();
};


module.exports = {
    loadVideoData,
    getNewId
}