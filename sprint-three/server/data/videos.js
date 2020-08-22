const express = require("express");
const router = express.Router();




// Route for root url /
//
app.get("/", (req, res) => {
    res.json({
        welcome: "welcome to my API",
    })
})




// get all videos from video.json and map through to create an array of objects for sideBarVideos  //
app.get("/videos", (req, res) => {
    loadVideoData((videos) => {
        const sideBarVideos = videos.map((video) => {
            return {
                id: video.id,
                title: video.title,
                channel: video.channel,
                image: video.image,
            };
        });
        res.json(sideBarVideos);
    });
});