const express = require('express')
const router = express.Router()

const ListagemController = require('../controllers/ListagemController')

router.get('listagemProduto', ListagemController.index)

module.exports = router