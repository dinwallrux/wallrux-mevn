const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const auth = require('../../../config/auth.config')
const verifySignUp = require('../middlewares/verifySignUp')

router.post('/register', [ verifySignUp.checkDuplicateUsernameOrEmail ], userController.registerNewUser)
router.post('/login', userController.loginUser)
router.get('/me', [ auth ], userController.getUserDetails)
router.patch('/update/:id', userController.updateUser)

module.exports = router