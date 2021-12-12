const jwt = require("jsonwebtoken")
require('dotenv').config({ path: '.env' });

const secret = process.env.SECRET

function genToken(user) {
    return jwt.sign({ data: user }, secret, { expiresIn: "2h" })
}

function verifyToken(token) {
    try {
        const tokenVerified = jwt.verify(token, secret, (err, decoded) => {
            if (decoded) return JSON.stringify(decoded.data)
            else return err
        })
        return tokenVerified
    } catch (error) {
        return error.message
    }
}


module.exports = { genToken, verifyToken }