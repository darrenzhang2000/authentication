const express = require('express')
//route imports
const usersRoute = require('./routes/users')
const indexRoute = require('./routes/index') 

const app = express()

//process.env.PORT is for when we deploy, otherwise we just use port 5000
const PORT = process.env.PORT || 5000

//routes
app.use('/', indexRoute)
app.use('/users', usersRoute)

app.listen(PORT, ()=>console.log(`listening at ${PORT}`))