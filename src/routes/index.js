var express = require( "express" );
const homeController = require( "../controllers/Home" );
var router = express.Router();


/* GET home page. */
router.get( "/", homeController.index );
router.get( "/guide", homeController.guide );
router.get("/user", homeController.users)



module.exports = router;
