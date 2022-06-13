const { User } = require("../models")

function format(user){
    const {id, username} = user

    return {
        id,
        username,
        accesToken: user.generateToken()
    }
}

module.exports = {
    registerForm : (req, res) => {
        res.render('register')
    },
    register: (req, res, next) => {
        try{
            User.register(req.body)
            .then(() => {
                res.send( respon = {
                    "status" : 201,
                    "message" : "registrasi berhasil silahkan login"
                })
            })
        }catch(err){
            res.send( respon = {
                "status" : 422,
                "error" : err.message,
                "message" : "periksa kembali data anda"
            })
        }
    },
    login: (req, res) => {
        try{
            User.authenticate(req.body).then(user => {
                res.json(
                    format(user)
                )
            })
        }catch(err){
            res.send(err.message, 422)
        }
    },
    whoami: (req, res) => {
        const currentUser = req.user
        res.json(currentUser)
    }
}