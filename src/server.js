const express = require('express');
const path = require('path')
const homeRouter = require('./routes/authRouter');

const server = express();
const port = 4000;

server.set('view engine', 'ejs');
server.set('views', path.resolve('src', 'views'))

server.use(express.json());
server.use(express.static(path.resolve('src', 'public')))

server.use(homeRouter);


server.listen(port, () => console.log(`Servidor rodando na porta http://localhost:${port}`))