const express = require('express')
//route imports
const usersRoute = require('./routes/users')
const indexRoute = require('./routes/index') 
//ejs
const expressLayouts = require('express-ejs-layouts')
const app = express()

//EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')

//routes
app.use('/', indexRoute)
app.use('/users', usersRoute)

//process.env.PORT is for when we deploy, otherwise we just use port 5000
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`listening at ${PORT}`))