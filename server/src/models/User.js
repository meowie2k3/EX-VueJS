const { hash } = require('bcrypt-nodejs');
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
const { QueryTypes } = require('sequelize');
const sequelize = require('../models/index').sequelize

function hashPassword (user, options) {
    const SALT_FACTOR = 8

    //console.log('hashPassword')

    if(!user.changed('password')){
        return;
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

async function hashString (string) {
    const SALT_FACTOR = 8

    //return a string not a promise
    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(string, salt, null))
        .then(hash => {
            return hash
        }
    )
}

module.exports = (sequelize, DataTypes) =>{
    const users = sequelize.define('users', {
        uid: {
            type: DataTypes.STRING,
            unique: true, // unique uid
            primaryKey: true
        },
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true, // unique email
            validate: {
                isEmail: {
                    args: true,
                    msg: "Must be a valid email address",
                }, // use email validator
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [8, 50],
                    msg: "Password must be at least 8 characters long",
                },
            }
        },
        role: DataTypes.STRING,
        location: DataTypes.STRING,
        description: DataTypes.STRING,
        photo: DataTypes.STRING,
    },
    {
        timestamps: false,
        freezeTableName: true,
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            // beforeSave: hashPassword
        }
    })

    users.prototype.comparePassword = async function (password) {
        return await bcrypt.compareAsync(password, this.password)
    }

    users.prototype.updateInfo = async function (newUser) {
        let uid = newUser.uid
        
        let Lquery = "UPDATE users SET "
        let Rquery = " WHERE uid = '" + uid + "'"

        // console.log(newUser)
        // console.log(this.description) 
        // comparison
        if(this.name != newUser.name) {
            await sequelize.query(Lquery + "name = '" + newUser.name + "'" + Rquery
                , { type: sequelize.QueryTypes.UPDATE })
        }
        if(this.email != newUser.email) {
            await sequelize.query(Lquery + "email = '" + newUser.email + "'" + Rquery
                , { type: sequelize.QueryTypes.UPDATE })
        }
        if(this.role != newUser.role) {
            await sequelize.query(Lquery + "role = '" + newUser.role + "'" + Rquery
                , { type: sequelize.QueryTypes.UPDATE })
        }
        if(this.location != newUser.location) {
            await sequelize.query(Lquery + "location = '" + newUser.location + "'" + Rquery
                , { type: sequelize.QueryTypes.UPDATE })
        }
        if(this.description != newUser.description) {
            await sequelize.query(Lquery + "description = '" + newUser.description + "'" + Rquery
                , { type: sequelize.QueryTypes.UPDATE })
        }
        if(this.photo != newUser.photo) {
            await sequelize.query(Lquery + "photo = '" + newUser.photo + "'" + Rquery
                , { type: sequelize.QueryTypes.UPDATE })
        }
        return 'success'
    }

    return users
}