const express = require('express')  // Step 1: express object
const router = express.Router() 

router.get('/product', (req,res) => {
    res.send('product get method is called')
})

router.post('/product', (req,res) => {
    res.send('product post method is called')
})

module.exports = router