const express = require('express')
const LoginController = require ('./controllers/LoginController')
const loginRoutes = require('./routes/loginRoutes')

const server = express()
const port = 5000

server.use(loginRoutes)
server.use(express.json())


server.listen(port, ()=> console.log(`Servidor rodando no http://localhost:${port}`))