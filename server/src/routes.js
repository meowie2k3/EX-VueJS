const AuthController = require('./controllers/AuthController')

module.exports = (app) => {

    // register route
    app.post('/register',
        // TODO: middleware validation
        AuthController.register)

    // test api route
    app.get('/test',AuthController.test)
}
