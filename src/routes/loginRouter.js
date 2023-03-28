const express = require('express')
const loginController = require('../controllers/LoginController')

const router = express.Router()

router.get('/login', loginController.showLogin)

module.exports = router