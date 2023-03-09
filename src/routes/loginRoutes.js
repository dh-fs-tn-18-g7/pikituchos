const express = require('express')
const LoginController = require ('../controllers/LoginController')

const router = express.Router()

router.post('/login', LoginController.listAll)
router.post('/login/:id', LoginController.listOne)

module.exports = router