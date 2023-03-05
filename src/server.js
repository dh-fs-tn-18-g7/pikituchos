const express = require('express')
const UsersController = require ('./controllers/UsersController')

const server = express()
const port = 5000

server.use(express.json())

server.get('/users', UsersController.listAll)
server.get('/users/:id', UsersController.listOne)

server.listen(port, ()=> console.log(`Servidor rodando no http://localhost:${port}`))