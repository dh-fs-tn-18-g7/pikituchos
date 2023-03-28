

const express = require( "express" ),
	router = express.Router(),
	HomeController = require( "../controllers/HomeController" ),
	CartController = require( "../controllers/CartController" );

/* GET home page. */
router.get( "/", getHomePage );
router.get( "/guide", getGuidePage );
router.get( "/produto", getProdutoPageModel );
router.get( "/admin/product-details/:productId", getProductDetailPage );
router.post( "/cart", postCartPage );
router.get( "/cart", getCartPage );
router.post( "/cart/delete-item", deleteCartItem );

module.exports = router;