const passport = require('passport')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')
const { User } = require('../models')

const options = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey : 'Ini rahasia ga boleh disebar-sebar'
}

passport.use(new JwtStrategy(options, async (payload, done) => {
    try{
        const user = await User.findByPk(payload.id)

        return done(null, user)
    }catch(err){
        return done(err, null)
    }
}))

module.exports = passport
