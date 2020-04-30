const express = require("express")
const router = express.Router()
const User = require("../models/user")
const bcrypt = require('bcryptjs')

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
    //check if user already exists in database
    User.findOne({email: email})
        .then((user) => {
            if (user) {
                //tell user to refill form
                errors.push({msg: "user already exists"})
                res.render('register', {
                    errors,
                    name, 
                    email,
                    password
                })
            } else{
                //if user does not exist, add user to the database
                const newUser = new User({
                    name, 
                    email,
                    password //es6 shorthand for below
                    // name: name,
                    // email: email,
                    // password: password
                })

                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(password, 10, function(err, hash) {
                        // Store hash in your password DB.
                        if(err) throw err;
                        //set password to has
                        new User.password = hash
                        //save user
                        newUser.save()
                            .then(user => {
                                req.flash('success_msg', 'You are now registered and can log in')
                                res.redirect('/login')
                            })
                            .catch(err => console.log(err))
                    });
                });
                
            }
        })
    // newUser.save()
})

module.exports = router
