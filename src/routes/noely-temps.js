

var express = require( "express" ),
	router = express.Router();


router.get( "/", ( l, y, h ) => {
	y.render( "produto" );
} );
















/* [ exports ]
=========================================== */
module.exports = router;
