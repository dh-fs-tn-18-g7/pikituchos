const express = require('express')
const LoginController = require ('../controllers/LoginController')

const router = express.Router()

router.post('/users', LoginController.listAll)
router.post('/users/:id', LoginController.listOne)

module.exports = router