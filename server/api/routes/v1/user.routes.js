const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user.controller')
const auth = require('../../../config/auth')
const verifySignUp = require('../../middlewares/verifySignUp')

router.post('/register', [ verifySignUp.checkDuplicateUsernameOrEmail ], userController.registerNewUser)
router.post('/login', userController.loginUser)
router.get('/me', [ auth ], userController.getUserDetails)
router.patch('/update/:id', userController.updateUser)

module.exports = router