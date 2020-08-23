const fs = require("fs");
const { v4: uuidv4 } = require('uuid');



function loadVideoData(callback) {
    fs.readFile('./data/videos.json', (err, data) => {
        if (err) throw err;
        const videos = JSON.parse(data);
        callback(videos);
    });
}

const request = (req, res, next) => {
    console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
};

const getNewId = () => {
    return uuidv4();
};



module.exports = {
    loadVideoData,
    getNewId,
    request

}