module.exports = (sequelize, DataTypes) =>
    sequelize.define('users', {
        uid: {
            type: DataTypes.STRING,
            unique: true, // unique uid
            primaryKey: true
        },
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true // unique email
        },
        password: DataTypes.STRING,
        role: DataTypes.STRING,
        location: DataTypes.STRING,
        description: DataTypes.STRING,
        photo: DataTypes.STRING,
    },
    {
        timestamps: false,
        freezeTableName: true
    })