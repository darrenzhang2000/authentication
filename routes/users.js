const express = require("express")
const router = express.Router()
const User = require("../models/user")
/*
Using router makes this app more modular as the routes are handled individually on each of their pages

router is a middleware

*/

// login gets appended to the route uri
router.get("/login", (req, res) => {
    //get request
    res.render("login")
})

router.get("/register", (req, res) => {
    //get request
    res.render("register")
})

//after user submits a form, make a post request to register
//stores user into db
router.post("/register", (req, res) => {
    const { name, email, password, password2 } = req.body
    const errors = []

    // let newUser = new User({
    //     name: name,
    //     email: email,
    //     password: password,
    //     date: date,
    // })

    if(!name){
        errors.push({msg: 'need name'})
    }

    if(!email){
        errors.push({msg: 'enter email'})
    }

    if(password != password2){
        errors.push({msg: 'passwords must match'})
    }

    if(errors.length > 0){
        res.render('register', {
            errors, 
            name,
            email,
            password,
        })
    }else{
        res.send('pass')
    }
    // newUser.save(newUser)
})

module.exports = router
