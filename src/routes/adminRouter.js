const express = require("express");
const AdminController = require("../controllers/AdminController");

const router = express.Router();


router.get("/admin/login", AdminController.showLogin);
router.get("/admin/home", AdminController.showAdminHome)
router.get("/admin/cadastroProduto", AdminController.showCadastro)
router.get("/admin/produto", AdminController.showProdutos)

//router.get("/admin/pedidos", AdminController.showPedidos)

router.post("/admin/login", AdminController.login);



module.exports = router;
