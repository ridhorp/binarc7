const { User } = require("../models")

module.exports = {
    registerForm : (req, res) => {
        res.render('register')
    },
    register: (req, res, next) => {
        User.register(req.body)
            .then(() => {
                res.redirect('/login')
            }).catch(err => next(err))
    },
    loginForm: (req, res) => {
        res.render('login')
    }
}