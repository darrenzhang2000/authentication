const express = require("express")
const mongoose = require("mongoose")
//route imports
const usersRoute = require("./routes/users")
const indexRoute = require("./routes/index")
//ejs
const expressLayouts = require("express-ejs-layouts")
const app = express()
const flash = require("connect-flash")
const session = require("express-session")

//DB Config
const db = require("./config/keys").MongoURI
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("mongoDB connected"))
    .catch((err) => console.log(err))

//EJS
app.use(expressLayouts)
app.set("view engine", "ejs")

// bodyparser - used to get results from form
app.use(express.urlencoded({ extended: false }))

// Express session
app.use(
    session({
        secret: "keyboard cat",
        resave: true,
        saveUninitialized: true,
    })
)
//connect flash
app.use(flash())

//global vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_meg')
    next()
})

//routes
app.use("/", indexRoute)
app.use("/users", usersRoute)

//process.env.PORT is for when we deploy, otherwise we just use port 5000
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`listening at ${PORT}`))
