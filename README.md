# authentication
npm i express bcryptjs passport passport-local ejs express-ejs-layouts mongoose connect-flash express-session

https://bootswatch.com/
bootswatch themes
https://fontawesome.com/

1. create express app
2. setup routes
    - creating routes in routes directory makes the project mode modular
3. create views
    - create layout boiler plate; add bootstrap, bootswatch, fontawesome
    - complete other views using ejs
4. setup config
    - store mongo uri in a keys file,  and add that to gitignore
    - import that uri, mongoose connect, and on successful connection, open, and log success message
    - db = require('file of uri')
    - mongoose.connect(db)
    - mongoose.connection.on('open', ()=>console.log('success'))

Notes:
A template engine allows you use static template files in your application. At runtime, the template engine replaces variables
in a template file with actual values, and transforms the template into an HTML file sent to the client. This makes it easier 
to design an HTML page.
    - In this project, we use ejs
    ```
    const expressLayouts = require('express-ejs-layouts')
    app.use(expressLayouts)
    app.use('view engine', 'ejs')
    ```

Bcrypt:
    - https://www.youtube.com/watch?v=O6cmuiTBZVs
    - If passwords are hashed without any salt, a hacker can generate a list hashes for common passwords and try them all.
    - By passing a salt, it makes it slower to create the hacker's dictionary that maps common passwords for hashed passwords
    - Bcrypt is slowing than other password hashing libraries, which has benefits.

To display flash messages- need session because we're redirecting and upon redirect, we do not store state
    - declare global variables in app.use ... req.locals
