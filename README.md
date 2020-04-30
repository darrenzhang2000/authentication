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

