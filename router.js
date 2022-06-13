const router = require('express').Router()
const auth = require('./controllers/authController')
const game = require('./controllers/gameController')

router.get('/', game.home)
router.get('/games', game.games)

router.get('/register', auth.registerForm)
router.post('/register', auth.register)

router.get('/login', auth.loginForm)


module.exports = router