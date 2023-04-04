<<<<<<< HEAD
const express = require ('express');
const ListagemController = require ('../controllers/ListagemController')
const router = express.Router();

router.get('/listagem-produto', ListagemController.showListagem);
=======
const express = require('express')
const router = express.Router()

const ListagemController = require('../controllers/ListagemController')

router.get('listagemProduto', ListagemController.index)
>>>>>>> 3c83331bffca7af4a23fde768c6719df932c699b

module.exports = router