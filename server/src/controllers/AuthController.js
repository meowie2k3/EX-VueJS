const { users } = require('../models')
const { QueryTypes } = require('sequelize');
const sequelize = require('../models/index').sequelize

//generate uid
const getUid = () => {
    const uidLength = 45
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let uid = ''
    for (let i = 0; i < uidLength; i++) {
        uid += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))
    }
    return uid
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
            res.send(user.toJSON())
        } catch (err) {
            //res.status(400).send(err)

            // format error message
            message = ''
            for(let i = '0'; i < err.errors.length; i++){
                message += err.errors[i].message + '\n'
            }
            // send error message
            // can only send one error message
            res.status(400).send(message)
        }
    },

    // test query
    async test (request, response) {
        // find all current users
        const query = await sequelize.query("SELECT * FROM users", { type: QueryTypes.SELECT });
        // make query into json
        const queryJSON = JSON.stringify(query)
        // send query
        response.send(queryJSON)
    }
}
