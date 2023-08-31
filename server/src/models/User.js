module.exports = (sequelize, DataTypes) =>
    sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true // unique email
        },
        password: DataTypes.STRING
    })