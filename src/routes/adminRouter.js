const express = require("express");
const AdminController = require("../controllers/AdminController");

const router = express.Router();


router.get("/admin/home", AdminController.showAdminHome)
router.get("/admin/cadastroProduto", AdminController.showCadastro)
router.get("/admin/produto", AdminController.showProdutos)

//router.get("/admin/pedidos", AdminController.showPedidos)

//router.post("/admin/cadastroProduto", AdminController.cadastrarPorduto);



module.exports = router;