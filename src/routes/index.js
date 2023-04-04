

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

router.get( "/returns-policy", getReturnsPolicyPage );
router.get( "/privacy-policy", getPrivacyPolicyPage );
router.get( "/politica-de-entrega", getPoliticaDeEntregaPage );
router.get( "/quem-somos", getQuemSomosPage );
router.get( "/seguranca", getSegurancaPage );

router.get( "/test", getTestesPage );


module.exports = router;