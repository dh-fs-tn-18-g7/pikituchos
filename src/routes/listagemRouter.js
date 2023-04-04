

const express = require ('express');
const router = express.Router();

const ListagemContreller = require('../controllers/ListagemController')


router.get('/listagem-produto', ListagemContreller.showListagem)


module.exports = router 



