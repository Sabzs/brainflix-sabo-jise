const fs = require("fs");
const { v4: uuidv4 } = require('uuid');



function loadVideoData(callback) {
    fs.readFile('./data/videos.json', (err, data) => {
        if (err) throw err;
        const videos = JSON.parse(data);
        callback(videos);
    });
}

const getNewId = () => {
    return uuidv4();
};

const request = (req, res, next) => {
    console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
};


module.exports = {
    loadVideoData,
    getNewId,
    request
}