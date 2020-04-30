const express = require("express")
const router = express.Router()

/*
Using router makes this app more modular as the routes are handled individually on each of their pages

router is a middleware

*/
router.get('/', (req, res) => { //get request
    res.render('welcome') //renders welcome view - js automatically looks for welcome.js under views
})

module.exports = router