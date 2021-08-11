const express = require('express')
const router = express.Router();

// MONGOOSE DATABASE ///////////
const db = require('../models/index')

// base route '/blvd' //// 
///////// 🏁 INDEX ROUTE //////////////
router.get('/', (req, res) => {
    res.render('index.ejs')
})

///////// 🆕 NEW ROUTE //////////////()
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

///////// 👩‍🎨 CREATE ROUTE //////////////
router.post('/', (req, res) => {
    db.User.create(req.body, (err, createdUser) => {
        if (err) return console.log(err)
        res.redirect('/blvd')
    })
    console.log(req.body)
})

///////// 🎙 SHOW ROUTE //////////////
router.get('/:userId', (req, res) => {
    res.render('show.ejs')
})

///////// ✍️ EDIT ROUTE //////////////
router.get('/:userId/edit', (req, res) => {
    res.render('edit.ejs')
})

///////// 💻 UPDATE ROUTE //////////////
router.put('/:userId', (req, res) => {
    res.redirect('/blvd')
})


///////// 🗑 Delete ROUTE //////////////
router.delete('/blvd/:id', (req, res) => {
    res.redirect('/blvd')
})


module.exports = router;