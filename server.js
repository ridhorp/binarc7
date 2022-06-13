const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs')

const router = require('./router')
app.use(router)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})