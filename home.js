const express = require('express')  // Step 1: express object
const router = express.Router() 

router.get('/home2', (req,res) => {
    res.send('home get is called .')
})

router.post('/home1', (req,res) => {
    res.send('home post method is called ')
})

router.delete('/home3', (req,res) => {
    res.send('home delete method is called')
})

module.exports = router
