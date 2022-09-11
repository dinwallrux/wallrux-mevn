const express = require('express')
const userRoutes = require('./user.routes')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('ok')
})

router.use('/users', userRoutes)

module.exports = router