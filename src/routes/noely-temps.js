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
>>>>>>> 7cfbaa0b3585faf05388767cf393be130b9d0c16

/* [ exports ]
=========================================== */
module.exports = router;
