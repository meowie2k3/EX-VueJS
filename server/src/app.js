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


// create status endpoint
app.get('/status', (req, res) => {
    res.send({
        message: 'hello world!'
    })
})

app.listen(process.env.PORT || 8081) // client will run on 8080