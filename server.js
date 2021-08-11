// REQUIRED MODULES ////////////
const express = require('express')
const rowdy = require('rowdy-logger')

// VARIABLES //////////////
const app = express()
const port = 4000
const rowdyResults = rowdy.begin(app)
const userController = require('./controller/userController')


//////////MIDDLEWARE///////////
app.set('view engine', 'ejs');
// urlencoded has to go above app.use 'CONTROLLER' to add to db //////////
app.use(express.urlencoded({ extended: false })) /// allows create route to Adds to DB
app.use('/blvd', userController);



/// START SERVER ////////////
app.listen(port, () => {
    console.log(` 🎨 💿 👨‍🎤 The server is running on port: ${port} 🎨 💿 👨‍🎤 `);
    rowdyResults.print()
})