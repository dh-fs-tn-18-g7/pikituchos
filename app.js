/* Importações */
<<<<<<< HEAD
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const ejs = require("ejs");
const session = require("express-session");
const methodOverride = require("method-override");

/* Importações das rotas */

const indexRouter = require("./src/routes/indexRouter");
const guide = require("./src/routes/noely-temps");
//const usersRouter = require("./src/routes/usersRouter");
const loginRouter = require("./src/routes/loginRouter");
const checkoutRouter = require("./src/routes/checkoutRouter");
const authRouter = require("./src/routes/authRouter");
const listagemRouter = require("./src/routes/listagemRouter");
const adminRouter = require("./src/routes/adminRouter");
=======
const createError = require( "http-errors" );
const express = require( "express" );
const path = require( "path" );
const cookieParser = require( "cookie-parser" );
const logger = require( "morgan" );
const ejs = require( "ejs" );
<<<<<<< HEAD
// const methodOverride = require('method-override')
=======
const session = require('express-session');
>>>>>>> 3c83331bffca7af4a23fde768c6719df932c699b

/* Importações das rotas */

const indexRouter = require( "./src/routes/indexRouter" );
const guide = require( "./src/routes/noely-temps" );
const usersRouter = require('./src/routes/usersRouter')
const loginRouter = require('./src/routes/loginRouter')
const checkoutRouter = require ("./src/routes/checkoutRouter")
<<<<<<< HEAD
const listagemRouter = require ('./src/routes/listagemRouter')
const carrinhoRouter = require ('./src/routes/carrinhoRouter');
=======
const authRouter = require('./src/routes/authRouter')
const listagemRouter = require('./src/routes/listagemRouter')
>>>>>>> 3c83331bffca7af4a23fde768c6719df932c699b
>>>>>>> 18ea1b8a9bb667bab2741e8a8e4d4d57d138091b

/* Variaveis */

const app = express();
const port = 2001;

// Define a coniguração do ejs
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use(logger("dev"));

app.use(express.json()); // define para que express ententa arquivos JSON

app.use(express.urlencoded({ extended: false })); //

app.use(methodOverride("_method")); // Sobrescreve os metodos Http para criação de rotas do tipo POST
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "src/public"))); // define onde vao estar os arquivos estaticos

/* Middleware */

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

/* Rotas */

app.use(indexRouter);
app.use(guide);
<<<<<<< HEAD
//app.use(usersRouter);
app.use(loginRouter);
app.use(checkoutRouter);
app.use(authRouter);
app.use(listagemRouter);
app.use(adminRouter);
=======
app.use(usersRouter)
app.use(loginRouter)
app.use(checkoutRouter)
<<<<<<< HEAD
app.use(listagemRouter)
app.use(carrinhoRouter);
=======
app.use(authRouter)
app.use(listagemRouter)


>>>>>>> 3c83331bffca7af4a23fde768c6719df932c699b

>>>>>>> 18ea1b8a9bb667bab2741e8a8e4d4d57d138091b

// catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, (err) => {
  console.log(`Servidor esta rodando na Porta => ${port}`);
});
