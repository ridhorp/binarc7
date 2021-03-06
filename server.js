const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({extended: false}))

app.use(express.json())

const passport = require('./lib/passport')
app.use(passport.initialize())

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

const router = require('./router')
app.use(router)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})