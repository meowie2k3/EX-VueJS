module.exports = (sequelize, DataTypes) =>
    sequelize.define('User', {
        name: DataTypes.STRING,
        role: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true // unique email
        },
        password: DataTypes.STRING
    })