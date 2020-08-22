const express = require("express");
const router = express.Router();

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
router.post("/", (req, res) => {
    const newVideo = {
        id: helper.getNewId(videos),
        title: req.body.title,
        channel: req.body.channel,
        image: req.body.image,
        description: req.body.description,
        views: 600555,
        likes: 510700,
        duration: "3:30",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: new Date().getTime(),
        comments: [
            {
                name: "Micheal Lyons",
                comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                likes: 0,
                timestamp: 1545162149000
            },
            {
                name: "Gary Wong",
                comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                likes: 0,
                timestamp: 1544595784046
            },
            {
                name: "Theodore Duncan",
                comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
                likes: 0,
                timestamp: 1542262984046
            }
        ]
    }
})


module.exports = router;