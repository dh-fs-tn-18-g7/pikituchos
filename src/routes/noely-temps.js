<<<<<<< HEAD


var express = require( "express" ),
	router = express.Router();


router.get( "/", ( l, y, h ) => {
	y.render( "produto" );
} );















=======
const express = require("express"),
  	  router = express.Router();

router.get("/", (l, y, h) => {
  y.render("produto");
});
>>>>>>> main

/* [ exports ]
=========================================== */
module.exports = router;
