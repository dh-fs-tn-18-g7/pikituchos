const express = require('express');
const methodOverride = require('method-override')
const path = require('path')
const homeRouter = require('./routes/authRouter');

const server = express();
const port = 4000;

server.set('view engine', 'ejs');
server.set('views', path.resolve('src', 'views'))

server.use(express.json());
server.use(express.urlencoded({ extended: false }))
server.use(methodOverride('_method'))
server.use(express.static(path.resolve('src', 'public')))


server.use(homeRouter);


server.listen(port, () => console.log(`Servidor rodando na porta http://localhost:${port}`))