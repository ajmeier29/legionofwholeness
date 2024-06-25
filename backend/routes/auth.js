

// routes/auth.js
const express = require('express');
const router = express.Router();
require('dotenv').config()

// Define a route
router.get('/', (req, res) => {
    res.send({
        'X-CAPTCHA-Key': process.env.CAPTCA_SECRET
    });// this gets executed when user visit http://localhost:3000/user
});

// export the router module so that server.js file can use it
module.exports = router;
