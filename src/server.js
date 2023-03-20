const express = require('express')
const loginRoutes = require ('./routes/loginRoutes')

const server = express()
const port = 5050

server.set('view engine', 'ejs')
//server.set('views', path.resolve('src', 'views'))
server.use(express.json())
server.use(loginRoutes)



server.listen(port, ()=> console.log(`Servidor rodando no http://localhost:${port}`))