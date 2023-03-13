
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
	produto: function( l, y, h ) {
		y.render( "produto" );
	},
	users: (req, res) => {
		res.render('auth/admin/usuario')
	}
};





/* [ exports ]
=============================================== */
module.exports = homeController;