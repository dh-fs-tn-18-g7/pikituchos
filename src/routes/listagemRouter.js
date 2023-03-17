const express = require ('express');
const ListagemController = require ('../controllers/ListagemController')
const router = express.Router();

router.get('/listagem-produto', ListagemController.showListagem);

module.exports = router