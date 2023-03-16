const express = require('express')
const router = express.Router()
const ProductsController = require('../controllers/ProductsController')

router.get('/produtos', ProductsController.showProduto)
router.get('/carrinho', ProductsController.showCarrinho)

module.exports = router

