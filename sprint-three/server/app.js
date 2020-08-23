const express = require("express");
const app = express();
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;
const videoRoutes = require("./routes/videos");



app.use(express.json());

app.use("/videos", videoRoutes);

app.listen(PORT, () => console.log(`listening at: ${BACKEND_URL}:${PORT}`));