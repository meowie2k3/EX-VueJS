const AuthController = require('./controllers/AuthController')

module.exports = (app) => {

    // register route
    app.post('/register',
        AuthController.register)

    // test api route
    app.get('/test',AuthController.test)
}
