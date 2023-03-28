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
>>>>>>> 13775de8207ad41721c90582a4b70ad1b4e9ab55

/* [ exports ]
=========================================== */
module.exports = router;
