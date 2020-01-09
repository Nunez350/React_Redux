const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors());

app.get('/with-cors', cors(), (req,res,next) => {
    res.json({msg: 'whoarr cors'})
})

app.listen(3000, (req,res) => {
    console.log("helo");


})


