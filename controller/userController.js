const express = require('express')
const router = express.Router();

// MONGOOSE DATABASE ///////////
const db = require('../models/index')

// base route '/blvd' //// 
///////// 🏁 INDEX ROUTE //////////////
router.get('/', (req, res) => {
    db.User.find({}, (err, allUsers) => {
        if (err) return console.log(err)
        res.render('index.ejs', {allUsers: allUsers})
    })
    
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
    db.User.findById(req.params.userId, (err, showUser) => {
        if (err) return console.log(err)
        res.render('show.ejs', { oneUser: showUser})
    })
})

///////// ✍️ EDIT ROUTE //////////////
router.get('/:userId/edit', (req, res) => {
    db.User.findById(req.params.userId, (err, showUser) => {
        if (err) return console.log(err)
        res.render('edit.ejs', { oneUser: showUser})
    })
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