// const express = require('express')  // Step 1: express object
// const app = express();  // Step 2: create the application object

// app.get('/home', (req,res) => {
//     res.send('My first express app is running.....')
// })

// app.listen(3002, ()=>{                           // Step 3: creating and starting our server
//     console.log('server is running !!!')
// })


const express = require('express')  // Step 1: express object
const app = express();  // Step 2: create the application object

app.use('/h',require('./home'))
app.use('/p',require('./product'))

app.listen(3002, ()=>{                           // Step 3: creating and starting our server
    console.log('server is running !!!')
})