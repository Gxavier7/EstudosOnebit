const express = require('express')
const authController = require('../controllers/authController')
const { ensureAuth } = require('../middlewares/authMiddleware')

const authRouter = express.Router()

authRouter.get(`/teste`, ensureAuth, authController.register)

authRouter.post(`/register`, authController.register)
authRouter.post(`/login`, authController.login)

module.exports = authRouter