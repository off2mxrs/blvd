const express = require('express')
const router = express.Router();


///////// 🏁 INDEX ROUTE //////////////
router.get('/', (req, res) => {
    res.render('../views/index.ejs')
})




module.exports = router;