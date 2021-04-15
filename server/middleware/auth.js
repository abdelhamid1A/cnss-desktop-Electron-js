const jwt = require('jsonwebtoken')

module.exports = function verifyToken(req,res,next){
    const token = req.header('auth-token')
    if(!token){
        return res.status(401).send('can\'t access')
    }
    try {
        const decodeToken = jwt.verify(token,process.env.JWT_KEY)
        next()
    } catch (err) {
        res.status(404).send('error Token');
    }
}