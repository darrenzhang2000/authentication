const express = require('express')
const router = express.Router()

/*
Using router makes this app more modular as the routes are handled individually on each of their pages

router is a middleware

*/

// login gets appended to the route uri
router.get('/login', (req, res) => { //get request
    res.send('login page')
})

router.get('/register', (req, res) => { //get request
    res.send('sign up page')
})

module.exports = router