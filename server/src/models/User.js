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
                    args: [8, 100],
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
        freezeTableName: true
    })