const express = require('express')
const router = express.Router()

router.get('/produtos', ProductsController.showProdutos)

module.exports = router