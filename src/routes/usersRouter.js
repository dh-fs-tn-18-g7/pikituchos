const express = require('express');
const logged = require('../middlewares/logged')

const router = express.Router(); // armazena os metodos de rotas do express

const UserController = require('../controllers/UsersControler')

router.get('/user',UserController.showUser)
router.get('/user/dadosPessoais', UserController.ShowUserDadosPessoais)
router.get('/user/pedidos', UserController.ShowUserPedidos)
router.get('/user/infoConta', UserController.ShowUserInfoConta)
router.get('/user/card', UserController.ShowUserCard)


module.exports = router
