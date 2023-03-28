const express = require('express');
const CadastroController = require('../controllers/CadastroController')

const router = express.Router()


router.get('/cadastro', CadastroController.showCadastro)
router.post('/cadastro', CadastroController.create)



module.exports = router