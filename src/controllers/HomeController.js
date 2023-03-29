

const productModel = require( "../models/Products" );

exports.HomeController = [
	getHomePage = ( req, res ) => {
		fetchAllProducts().then( ([ products ]) => {
            const viewsData = {
                admin: false,
                products,
                pageTitle: "Home page - Products List"
            };
            res.render( "index", viewsData );
        } ).catch( error => console.log( error ) );
		// fetchAllProducts( products => {
		// 	const viewsData = {
		// 		admin: false,
		// 		products,
		// 		pageTitle: "Home page - Products List"
		// 	};
		// 	res.render( "index", viewsData );
		// 	console.clear();
		// 	console.log( req.body );
		// } );
	},
	getProductDetailPage = ( req, res ) => {
		const productId = req.params.productId;
		getProductById( productId, product => {
			const viewsData = {
				admin: false,
				product,
				pageTitle: req.body.title,
			};
			res.render( "productDetails", viewsData );
		} );
	},
	getGuidePage = ( req, res, next ) => {
		const viewsData = {
			pageTitle: "Pikituchos Guide Page"
		};
		res.render( "guide", viewsData );
	},
	getProdutoPageModel = ( req, res, next ) => {
		const viewsData = {
			pageTitle: "Product Page Model"
		};
		res.render( "produto", viewsData );
	},
	getPKHomePage = ( req, res, next ) => {
		const viewsData = {
			pageTitle: "Pikituchos Homepage"
		};
		res.render( "home", viewsData );
	},
];