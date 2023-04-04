const express = require ('express');
const CarrinhoController = require ('../controllers/carrinhoController')
const router = express.Router();

router.get('/carrinho', CarrinhoController.showListagem);

module.exports = router