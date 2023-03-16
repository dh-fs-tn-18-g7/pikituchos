<<<<<<< HEAD
const express = require('express');
const CadastroController = require('../controllers/CadastroController')

const router = express.Router()


router.get('/cadastro', CadastroController.showCadastro)
router.post('/cadastro', CadastroController.create)

=======
const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

router.get('/login', AuthController.showLogin)
router.get('/cadastro', AuthController.showCadastro)
>>>>>>> 97d4a133d7ca3cfa3c6a4032f1331a66a368eed0

module.exports = router