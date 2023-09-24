const { users } = require('../models')
const { QueryTypes } = require('sequelize');
const sequelize = require('../models/index').sequelize
const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = {
    async updateUserInfo(req, res) {
    }
}