

const express = require( "express" ),
	router = express.Router(),
	ProductsController = require( "../controllers/ProductsController" );


router.get( "/", getAdminProductsPage );
router.get( "/add-product", getAddProductPage );
router.post( "/add-product", postAddProductPage );
router.get( "/edit-product/:productId", getEditProductPage );
router.post( "/edit-product", postEditProductPage );
router.post( "/delete", postDeleteProductPage );

module.exports = router;

