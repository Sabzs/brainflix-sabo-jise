const express = require('express');
// const apiRoutes = require('./routes/apiRoutes') // inport from apiRoutes.js
const port = 5000;
//initialize express
const app = express();


//body parser //
// app.use(express.json());

// app.use('/', apiRoutes); //this line of code is commented to line #3

// app.use("/apiRoutes", require("./routes/apiRoutes"));





app.listen(port, () => {
    console.log(`port running at http://localhost:${port}`)
});