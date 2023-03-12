/* Importações */
const createError = require( "http-errors" );
const express = require( "express" );
const path = require( "path" );
const cookieParser = require( "cookie-parser" );
const logger = require( "morgan" );
const ejs = require( "ejs" );


const indexRouter = require( "./src/routes/index" );
const usersRouter = require( "./src/routes/usersRouter" )
const lyhTemps = require( "./src/routes/noely-temps" );
const checkoutRouter = require ('./src/routes/checkoutRouter')
const loginRouter = require ("./src/routes/loginRouter")

/* Variaveis */

const app = express();
const port = 3839

// view engine setup
app.set( "views", path.join( __dirname, "src/views" ) );
app.set( "view engine", "ejs" );

app.use( logger( "dev" ) );
app.use( express.json() ); // define para que o express entenda arquivos JSON
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser() );
app.use( express.static( path.join( __dirname, "src/public" ) ) );

//importações das rotas

app.use( "/", indexRouter );
app.use(usersRouter );
app.use( "/produto", lyhTemps );
app.use(checkoutRouter)
app.use(loginRouter)


// catch 404 and forward to error handler

app.use( function( req, res, next ) {
	next( createError( 404 ) );
} );

// error handler
app.use( function( err, req, res, next ) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get( "env" ) === "development" ? err : {};

	// render the error page
	res.status( err.status || 500 );
	res.render( "error" );
} );

app.listen(port, () => console.log (`servidor está rodando na porta ${port}`))
