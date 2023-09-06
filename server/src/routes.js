const AuthController = require('./controllers/AuthController')

module.exports = (app) => {

    // register route
    app.post('/register',
        // TODO: middleware validation
        AuthController.register)

    // login route
    app.post('/login',
        AuthController.login)
}
