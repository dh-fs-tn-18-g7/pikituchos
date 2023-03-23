const express = require("express")
const AdminController = require("../controllers/AdminController")

const router = express.Router()


router.get('/admin/login',AdminController.showLogin);
/* router.get('/admin/produtos',AdminController.showProdutos);
router.get('/admin/listaProdutos',AdminController.showListaProdutos);
router.get('/admin/produtos/cadastro',AdminController.showCadastrarProduto);
router.get('/admin/pedidos',AdminController.showPedidos) */


module.exports = router