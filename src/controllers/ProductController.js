
/* [ imports ]
=============================================== */
const express = require( "express" );

/* [ properties ]
=============================================== */
const productController = {
	index: function( req, res, next ) {
		res.render( "produto" );
	},
};





/* [ exports ]
=============================================== */
module.exports = productController;