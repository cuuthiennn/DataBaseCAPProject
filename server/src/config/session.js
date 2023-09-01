require('dotenv').config();
const session = require('express-session');

const oneDay = 1000 * 60 * 60 * 24;
const config = session(
    {
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: oneDay
        }
    }
)

module.exports = config;