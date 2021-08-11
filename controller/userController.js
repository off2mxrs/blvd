const express = require('express')
const router = express.Router();


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
    res.redirect('/blvd')
})





module.exports = router;