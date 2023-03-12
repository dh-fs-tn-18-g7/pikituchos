const express = require('express');
const UserController = require('../controllers/UserControllers')

const router = express.Router(); // armazena os metodos de rotas do express




router.get('/Users', UserController.showUser)


module.exports = router;
