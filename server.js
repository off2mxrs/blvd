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
app.use('/blvd', userController);






///////// 👩‍🎨 CREATE ROUTE //////////////
app.post('/blvd', (req, res) => {
    res.send('CREATED BLVD Profile page')
})


///////// 🎙 SHOW ROUTE //////////////
app.get('/blvd/:id', (req, res) => {
    res.send('SHOW BLVD Profile page')
})

///////// ✍️ EDIT ROUTE //////////////
app.get('/blvd/:id/edit', (req, res) => {
    res.send('EDIT BLVD Profile page')
})

///////// 💻 UPDATE ROUTE //////////////
app.put('/blvd/:id', (req, res) => {
    res.send('UPDATE BLVD Profile page')
})

///////// 🗑 Delete ROUTE //////////////
app.delete('/blvd/:id', (req, res) => {
    res.send('DELETE BLVD Profile page')
})


/// START SERVER ////////////
app.listen(port, () => {
    console.log(` 🎨 💿 👨‍🎤 The server is running on port: ${port} 🎨 💿 👨‍🎤 `);
    rowdyResults.print()
})