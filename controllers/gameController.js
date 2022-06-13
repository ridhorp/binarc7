module.exports = {
    home : (req, res) => {
        res.render('index')
    },
    games : (req, res) => {
        res.render('games')
    }
}