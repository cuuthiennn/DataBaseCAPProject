const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.use("/user", require("./src/routes/UserRoute"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});