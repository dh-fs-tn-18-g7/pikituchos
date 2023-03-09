const express = require('express')
const LoginController = require ('../controllers/LoginController')

const router = express.Router()

router.get('/login', LoginController.listAll)
router.get('/login/:id', LoginController.listOne)

module.exports = router