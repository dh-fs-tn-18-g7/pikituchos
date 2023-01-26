var express = require( "express" );
const homeController = require( "../controllers/Home" );
var router = express.Router();


/* GET home page. */
router.get( "/", homeController.index );
router.get( "/guide", homeController.guide );

module.exports = router;
