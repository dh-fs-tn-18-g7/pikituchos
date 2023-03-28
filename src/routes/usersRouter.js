const express = require('express');

const router = express.Router(); // armazena os metodos de rotas do express

const UserController = require('../controllers/UsersControler')

router.get('/user',UserController.showUser)

module.exports = router
