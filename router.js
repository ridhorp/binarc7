const router = require('express').Router()
const auth = require('./controllers/authController')
const game = require('./controllers/gameController')
const restrict = require('./middlewares/restrict')

router.get('/', game.home)
router.get('/games', game.games)

router.get('/register', auth.registerForm)
router.post('/api/v1/auth/register', auth.register)

router.post('/api/v1/auth/login', auth.login)
router.get('/api/v1/auth/whoami', restrict, auth.whoami)


module.exports = router