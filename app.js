/* Importações */
const createError = require( "http-errors" );
const express = require( "express" );
const path = require( "path" );
const cookieParser = require( "cookie-parser" );
const logger = require( "morgan" );

const indexRouter = require( "./src/routes/index" );
const usersRouter = require( "./src/routes/users" ),
	lyhTemps = require( "./src/routes/noely-temps" );
const authRouter = require('./src/routes/authRouter')
const productsRouter = require('./src/routes/productsRouter')
/* Variaveis */

const app = express();

// view engine setup
app.set( "views", path.join( __dirname, "src/views" ) );
app.set( "view engine", "ejs" );

app.use( logger( "dev" ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser() );
app.use( express.static( path.join( __dirname, "src/public" ) ) );

app.use( "/", indexRouter );
app.use( "/users", usersRouter );
app.use( "/produto", lyhTemps );
app.use(authRouter)
app.use(productsRouter)

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

module.exports = app;
