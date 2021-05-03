const express = require("express");
const router = express.Router();
const videosData = __dirname + "../../data/videos.json";
const videos = require(videosData);
const helper = require("../middleware/helper");
const { loadVideoData } = require("../middleware/helper");



//get all videos from video.json //
router.get("/sidevideos", (req, res) => {
  loadVideoData((videos) => {
    res.json(videos);
  });
});


//get all selected videos items from video.json //
router.get("/selecteditems", (req, res) => {
  loadVideoData((videos) => {
    const sideBarVideos = videos.map((sidevideo) => {
      return {
        id: sidevideo.id,
        title: sidevideo.title,
        channel: sidevideo.channel,
        image: sidevideo.image,
      };
    });
    res.json(sideBarVideos);
  });
});


//...getting videos by ID using url params :id //
router.get("/mainvideo/:id", (req, res) => {
  const vidId = req.params.id;
  loadVideoData((videos) => {
    const mainvideo = videos.findIndex((vidObj) => vidObj.id === vidId);
    if (mainvideo !== -1) {
      //return a single video if id matches
      res.json(videos[mainvideo]);
    } else {
      res.status(404).json({ message: `Video with id ${vidId} not found` });
    }
  });
});

//post video==//
router.post("/", (req, res) => {
  const newVideo = {
    id: helper.getNewId(),
    title: req.body.title,
    channel: req.body.channel,
    image: req.body.image,
    description: req.body.description,
    views: 55066,
    likes: 60775,
    timestamp: helper.timestamp(),
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