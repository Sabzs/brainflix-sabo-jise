const express = require("express");
const router = express.Router();
const videos = require("../data/videos.json");
const { loadVideoData } = require("../controllers/helper");
const helper = require("../controllers/helper");




// Route for root url /
// router.get("./", (req, res) => res.json(videoList));

// get all videos from video.json and map through to create an array of objects for sideBarVideos  //
router.get("/videos", (req, res) => {
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
//=================================================


//getting videos by ID using url params :id //
router.get("/videos/:id", (req, res) => {
    const vidId = res.params.id;
    loadVideoData((videos) => {
        const vidIndex = videos.findIndex((vidObj) => vidObj.id === vidId);
        if (vidIndex !== -1) {
            //return a single video if id matches
            res.json(videos[vidIndex]);
        } else {
            res.status(404).json({ message: `Video with id ${vidId} not found` });
        }
    });
});



//post 
// router.post("/", (req,  res) => {
// res.json()
// } );
// app.push("/comments, (req, res") => {
//     Comment.push(req.body.comment);
//     return res.status(201).send(comments);
// }

module.exports = router;