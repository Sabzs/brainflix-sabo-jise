const express = require('express');
const apiRoutes = require('./data/videos'); // inport from apiRoutes.js
const logger = require('./middleware/logger');
const port = 5000;
const fs = require('fs');
const cors = require("cors");
const app = express();


//body parser - helps when try to post a video with req.body Object//
app.use(express.json());

app.use(cors());

app.use(logger);

app.use("/videos", require("./data/videos")); //this line of code is commented to line #3


app.listen(port, () => {
    console.log(`port running at http://localhost:${port}`)
});