const express = require("express");
const router = express.Router();
const videosData = __dirname + "../../model/videos.json";
const videos = require(videosData);
const helper = require("../controllers/helper");
const { loadVideoData } = require("../controllers/helper");



// router.get("/", (req, res) => {
//     const videoList = videos.map(video => {
//         return {
//             id: video.id,
//             title: video.title,
//             channel: video.channel,
//             image: video.image,
//         }
//     })
//     res.json(videoList);
// })

// router.get("/:id", (req, res) => {
//     const found = videos.some(video => video.id === req.params.id);
//     if (found) {
//         res.json(video.filter(video => video.id === req.params.id));
//     } else {
//         res.status(400)
//             .json({ errMessage: `Video with ID: ${req.params.id} not found` });
//     }
// })
//==================================================================//

//get all videos from video.json and map through to create an array of objects for sideBarVideos  //
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
            //return a single video if id matches
            res.json(videos[vidIndex]);
        } else {
            res.status(404).json({ message: `Video with id ${vidId} not found` });
        }
    });
});


//post 
router.post("/", (req, res) => {
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
    videos.push(newVideo);
    helper.writeJSONFile(videosData, videos)
    res.json(newVideo.id);
});

module.exports = router;