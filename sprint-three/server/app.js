const express = require('express');
const app = express();
const fs = require('fs');
const cors = require("cors");
require('dotenv').config();
const { PORT, BACKEND_URL } = process.env;
const routes = require('./routes/videos');



//body parser - helps when try to post a video with req.body Object//
app.use(express.json());
app.use(cors());
app.use("/videos", routes);


app.listen(PORT, () => console.log(`listening at: ${BACKEND_URL}:${PORT}`));