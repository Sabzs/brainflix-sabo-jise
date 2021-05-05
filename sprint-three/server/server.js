const express = require("express");
const path = require("path");
const cors = require("cors")
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const videoRoutes = require("./routes/videos");
app.use("/videos", videoRoutes);


//heroku deplyment==//
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
  });
}


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`)
});