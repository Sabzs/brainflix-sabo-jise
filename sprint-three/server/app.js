const express = require('express');
const apiRoutes = require('./routes/apiRoutes'); // inport from apiRoutes.js
const logger = require('./middleware/logger');
const port = 5000;
const cors = require("cors");
const app = express();


//body parser //
app.use(express.json());

app.use(cors());

app.use(logger);

app.use("/apiRoutes", require("./routes/apiRoutes")); //this line of code is commented to line #3


app.listen(port, () => {
    console.log(`port running at http://localhost:${port}`)
});