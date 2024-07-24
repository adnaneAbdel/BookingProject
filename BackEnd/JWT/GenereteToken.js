const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.JWT_SECRET
const EXPIRESIN = process.env.EXPIRESIN

const genereteToken = (user) =>{
    const payload = {
        id: user._id,
        name:user.name,
        email: user.email
    }
    return jwt.sign(payload, SECRET_KEY  ,{ expiresIn: EXPIRESIN })
}

module.exports = genereteToken