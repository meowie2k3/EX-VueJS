module.exports = {
    port: process.env.PORT || 8081,

    db: {
        database: process.env.DB_NAME || 'EX-project',
        user: process.env.DB_USER || 'sa',
        password: process.env.DB_PASS || '1',
        options: {
            dialect: process.env.DIALECT || 'mssql',
            host: process.env.HOST || 'HUYDAO-PC',
            //host : process.env.HOST || 'LAPTOP-FDE31I62',
            storage: '../../../database/EX-project.sql'
        }
    },

    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
