const express = require('express')
const router = express.Router();


///////// 🏁 INDEX ROUTE //////////////
router.get('/', (req, res) => {
    res.send('WELCOME TO BLVD')
})




module.exports = router;