/* Importações */
const createError = require( "http-errors" );
const express = require( "express" );
const path = require( "path" );
const cookieParser = require( "cookie-parser" );
const logger = require( "morgan" ),
	rootDir = require( "./src/utils/path" );

/* Importações das rotas */

// const indexRouter = require( "./src/routes/indexRouter" );
// const guide = require( "./src/routes/noely-temps" );
const usersRouter = require( "./src/routes/usersRouter" );
const loginRouter = require( "./src/routes/loginRouter" );
const checkoutRouter = require( "./src/routes/checkoutRouter" );

/* ==[ Lyh Routes ]============================ */
const indexRoutes = require( "./src/routes/index" ),
	adminRoutes = require( "./src/routes/admin" );
/* ============================================ */

/* Variaveis */

const app = express();
const port = 4444;

// Define a coniguração do ejs
app.set( "views", path.join( __dirname, "src/views" ) );
app.set( "view engine", "ejs" );

app.use( logger( "dev" ) );

app.use( express.json() ); // define para que express ententa arquivos JSON

app.use( express.urlencoded( { extended: false } ) );

app.use( cookieParser() );
app.use( express.static( path.join( __dirname, "src/public" ) ) ); // define onde vao estar os arquivos estaticos


/* ==[ Lyh Statics ]====================== */
app.use( "/home", express.static( "src/public" ) );
app.use( "/products", express.static( "src/public" ) );
app.use( "/products/edit", express.static( "src/public" ) );
app.use( "/produto", express.static( "src/public" ) );
app.use( "/admin", express.static( "src/public" ) );
app.use( "/admin/edit-product", express.static( "src/public" ) );
app.use( "/admin/product-details", express.static( "src/public" ) );
// app.use( "/", express.static( "src/public" ) );
/* ======================================= */

/* ==[ Lyh uses routes ]================== */
app.use( "/", indexRoutes );
app.use( "/admin", adminRoutes );


/* Rotas */

// app.use( indexRouter );
// app.use( guide );
app.use( usersRouter );
app.use( loginRouter );
app.use( checkoutRouter );


/* Middleware */

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

// app.listen( port, ( err )=>{
// 	console.log( `Servidor esta rodando da port${port}` );
// } );

module.exports = app;
