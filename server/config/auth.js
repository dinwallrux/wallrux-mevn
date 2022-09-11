const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.replace("Bearer ", "")
        const decoded = jwt.verify(token, "secret")
        req.userData = decoded
        // console.log(req.userData);
        next()
    } catch (err) {
        return res.status(401).json({ 
            message: "Authentication Failed"
        })
    }
}