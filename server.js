// REQUIRED MODULES ////////////
const express = require('express')

// VARIABLES //////////////
const app = express()
const port = 4000

///////// INDEX ROUTE //////////////
app.get('/', (req, res) => {
    res.send('WELCOME TO BLVD')
})

/// START SERVER ////////////
app.listen(port, () => {
    console.log(` 🎨 💿 👨‍🎤 The server is running on port: ${port} 🎨 💿 👨‍🎤 `);
    //rowdyResults.print()
})