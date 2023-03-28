<<<<<<< HEAD
const express = require('express')
const router = express.Router()

const ListagemController = require('../controllers/ListagemController')

router.get('listagemProduto', ListagemController.index)
=======
const express = require ('express');
const ListagemController = require ('../controllers/ListagemController')
const router = express.Router();

router.get('/listagem-produto', ListagemController.showListagem);
>>>>>>> 508754163431f28107467420c310cb5f5e49edde

module.exports = router