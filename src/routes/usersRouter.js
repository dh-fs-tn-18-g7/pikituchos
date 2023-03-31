const express = require('express');
const logged = require('../middlewares/logged')

const router = express.Router(); // armazena os metodos de rotas do express

const UserController = require('../controllers/UsersControler')

router.get('/user', logged, UserController.showUser)

module.exports = router
