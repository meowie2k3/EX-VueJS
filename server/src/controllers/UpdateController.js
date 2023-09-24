const { users } = require('../models')
const { QueryTypes } = require('sequelize');
const sequelize = require('../models/index').sequelize
const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = {
    async updateUserInfo(req, res) {
        //console.log(req.body)
        const newUser = req.body
        try {
            const currUser = await users.findOne({
                where: {
                    uid: newUser.uid
                }
            })
            if(!currUser) {
                return res.status(409).send({
                    error: 'Conflict: User not found'
                })
            }
            const updatedUser = await currUser.updateInfo(newUser)
            res.send(updatedUser)
        } catch (err) {
            res.status(500).send(err)
        }
    }
}