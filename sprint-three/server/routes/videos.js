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
    comments: [
      {
        "name": "Micheal Lyons",
        "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        "likes": 0,
        "timestamp": 1545162149101
      },
      {
        "name": "Gary Wong",
        "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
        "likes": 0,
        "timestamp": 1544595784057
      },
      {
        "name": "Theodore Duncan",
        "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
        "likes": 0,
        "timestamp": 1542262986076
      }
    ]
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