const express = require('express');
const app = express();
const fs = require('fs');
const cors = require("cors");
require('dotenv').config();
const { PORT, BACKEND_URL } = process.env;
const videos = require('./routes/videos');
const bodyParser = require("body-parser");





//body parser - helps when try to post a video with req.body Object//
app.use(express.json());
app.use(bodyParser.json())
app.use(cors());
app.use("/videos", videos);

app.listen(PORT, () => console.log(`listening at: ${BACKEND_URL}:${PORT}`));