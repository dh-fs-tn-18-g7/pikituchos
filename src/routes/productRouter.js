var express = require( "express" );
const productController = require( "../controllers/ProductController" );
var router = express.Router();


/* GET home page. */
router.get( "/produto", productController.index );

module.exports = router;
