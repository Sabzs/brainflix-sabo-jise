const express = require("express");
const router = express.Router();
const videosData = __dirname + "../../model/videos.json";
const videos = require(videosData);
const helper = require("../controllers/helper");
const { loadVideoData } = require("../controllers/helper");



//get all videos from video.json //
router.get("/", (req, res) => {
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

//...getting videos by ID using url params :id //
router.get("/:id", (req, res) => {
    const vidId = req.params.id;
    loadVideoData((videos) => {
        const vidIndex = videos.findIndex((vidObj) => vidObj.id === vidId);
        if (vidIndex !== -1) {
            res.json(videos[vidIndex]);
        } else {
            res.status(404).json({ message: `Video with id ${vidId} not found` });
        }
    });
});

//post 
router.post("/", (req, res) => {
    console.log("post route")
    const newVideo = {
        id: helper.getNewId(),
        title: req.body.title,
        channel: req.body.channel,
        description: req.body.description,
        image: req.body.image,
        views: 55066,
        likes: 60775,
        timestamp: helper.Date.now(),
        comments: []
    }
    if (!newVideo.title || !newVideo.description) {
        return res.status(400).json({
            erroMessage: "Please provide title and description"
        })
    }
    console.log(videos)
    videos.push(newVideo);
    helper.writeJSONFile(videosData, videos)
    res.json(newVideo.id);
});

module.exports = router;