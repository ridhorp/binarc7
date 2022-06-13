const router = require('express').Router()
const auth = require('./controllers/authController')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/register', auth.registerForm)
router.post('/register', auth.register)

router.get('/login', auth.loginForm)


module.exports = router