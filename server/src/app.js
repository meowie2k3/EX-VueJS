console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express() // create your express app
app.use(morgan('combined')) // log requests
app.use(bodyParser.json()) // parse json requests
app.use(cors()) // enable cors

//get
//post
//put
//delete
//patch


// create register endpoint
app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}, your user was registered`
    })
})

app.listen(process.env.PORT || 8081) // client will run on 8080