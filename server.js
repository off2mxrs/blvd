// REQUIRED MODULES ////////////
const express = require('express')
const rowdy = require('rowdy-logger')

// VARIABLES //////////////
const app = express()
const port = 4000
const rowdyResults = rowdy.begin(app)

///////// 🏁 INDEX ROUTE //////////////
app.get('/blvd', (req, res) => {
    res.send('WELCOME TO BLVD')
})

///////// 🆕 NEW ROUTE //////////////
app.get('/blvd/new', (req, res) => {
    res.send('NEW BLVD Profile page')
})

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



/// START SERVER ////////////
app.listen(port, () => {
    console.log(` 🎨 💿 👨‍🎤 The server is running on port: ${port} 🎨 💿 👨‍🎤 `);
    rowdyResults.print()
})