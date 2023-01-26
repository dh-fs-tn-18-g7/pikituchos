
/* [ imports ]
=============================================== */
const express = require( "express" );

/* [ properties ]
=============================================== */
const homeController = {
	index: function( req, res, next ) {
		res.render( "index" );
	},
	guide: function( l, y, h ) {
		y.render( "guide" );
	},
};





/* [ exports ]
=============================================== */
module.exports = homeController;