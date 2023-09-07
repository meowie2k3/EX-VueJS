const { users } = require('../models')
const { QueryTypes } = require('sequelize');
const sequelize = require('../models/index').sequelize
const jwt = require('jsonwebtoken')
const config = require('../config/config')

//generate uid
function getUid () {
    const uidLength = 45
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let uid = ''
    for (let i = 0; i < uidLength; i++) {
        uid += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))
    }
    return uid
}

// trim spaces at the end of data
function trimData (data) {
    for(let i = data.length - 1; i >= 0; i--){
        if(data[i] == ' '){
            data = data.slice(0, i)
        }else{
            break
        }
    }
    return data;
}

function jwtSignUser (user) {
    // 1 week sign in duration
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}


module.exports = {
    // register
    async register(req, res) {
        try {
            //generate uid
            req.body.uid = getUid()
            // create user
            const user = await users.create(req.body)
            // send back user info
            // res.send(user.toJSON())
            res.send("User created")
        } catch (err) {
            res.status(400).send(err)

            // format error message
            // message = ''
            // for(let i = 0; i < err.errors.length; i++){
            //     message += err.errors[i.toString()].message + '\n'
            // }
            // // send error message
            // // can only send one error message
            // res.status(400).send(message)
        }
    },

    async login(req, res) {
        try{
            const { email, password } = req.body
            const user = await users.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }
            else {
                //console.log(user.toJSON())
                // data trimming
                user.email = trimData(user.email)
                user.password =  trimData(user.password)
                //console.log(user.password + " " + password)
            }

            const isPasswordValid = await user.comparePassword(password)
            //console.log(isPasswordValid)
            if (!isPasswordValid) {
                //console.log(user.password + " " + password)
                return res.status(403).send({
                    error: 'Password is incorrect'
                })
            }
            // send back user info
            res.send({
                user: user.toJSON(),
                token: jwtSignUser(user.toJSON())
            })

        }catch(err){
            res.status(500).send(err)
        }
    },

    //test query
    async test (request, response) {
        // find all current users
        const query = await sequelize.query("SELECT * FROM users", { type: QueryTypes.SELECT });
        // make query into json
        const queryJSON = JSON.stringify(query)
        // send query
        response.send(queryJSON)
    }
}
