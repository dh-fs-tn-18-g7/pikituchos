

const ProductModel = require( "../models/Products" );


exports.ProductsController = [
	getAddProductPage = ( req, res ) => {
		const viewsData = {
			edit: false,
			pageTitle: "Cadastro de Produtos"
		};
		res.render( "addProduct", viewsData );
	},
	postAddProductPage = ( req, res ) => {
		console.log( req.body );
		let x = Math.floor( ( Math.random() * 900 ) + 100 ),
			y = Math.floor( ( Math.random() * 9000 ) + 1000 );
		const product = {
			id: Date.now(),
			ref: `PK-${x}-${y}`,
			title: req.body.title,
			cover: req.body.cover,
			image: req.body.image,
			image01: req.body.image01,
			image02: req.body.image02,
			image03: req.body.image03,
			category: req.body.category,
			price: req.body.price,
			cents: req.body.cents,
			oldPrice: req.body.oldPrice,
			description: req.body.description,
			genre: req.body.genre,
			type: req.body.type
		};
		saveProduct( product );
		res.redirect( "/admin" );
	},
	getAdminProductsPage = ( req, res ) => {
		fetchAllProducts( products => {
			const viewsData = {
				admin: true,
				pageTitle: "Admin Products",
				products
			};
			res.render( "admin", viewsData );
		} );
	},
	getEditProductPage = ( req, res ) => {
		const productId = req.params.productId;
		getProductById( productId, product => {
			const viewsData = {
				edit: true,
				product,
				pageTitle: "Edit Product"
			};
			console.log( viewsData.product );
			res.render( "addProduct", viewsData );
		} );
	},
	postEditProductPage = ( req, res ) => {
		console.log( req.body );
		const product = {
			id: req.body.productId,
			title: req.body.title,
			price: req.body.price,
			image: req.body.image,
			description: req.body.description,
			ref: req.body.ref,
			cover: req.body.cover,
			image01: req.body.image01,
			image02: req.body.image02,
			image03: req.body.image03,
			category: req.body.category,
			cents: req.body.cents,
			oldPrice: req.body.oldPrice,
			genre: req.body.genre,
			type: req.body.type
		};
		console.log( req.body );
		updateProductIdById( product, req.body.productId );
		res.redirect( "/admin" );
	},
	postDeleteProductPage = ( req, res ) => {
		const productId = req.body.productId;
		deleteProductById( productId, () => res.redirect( "/admin" ) );
	},

    
	getAdminProducts1Page = ( req, res ) => {
		fetchAllProducts( products => {
			const viewsData = {
				admin: true,
				pageTitle: "Admin Products1",
				products
			};
			res.render( "products1", viewsData );
		} );
	},
];
