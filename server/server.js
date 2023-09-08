const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const session = require('./src/config/session');
const port = process.env.PORT || 3001;
require('./src/config/database')

var cors = require('cors')
app.use(cors())

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.use(session);

app.use("/user", require("./src/routes/UserRoute"));
app.use("/file", require("./src/routes/FileRoute"));
app.use("/userRole", require("./src/routes/UserRoleRoute"));
app.use("/workingRole", require("./src/routes/WorkingRoleRoute"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});