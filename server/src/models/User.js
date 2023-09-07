const { hash } = require('bcrypt-nodejs');
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

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
            beforeSave: hashPassword
        }
    })

    users.prototype.comparePassword = async function (password) {
        return await bcrypt.compareAsync(password, this.password)
    }


    return users
}