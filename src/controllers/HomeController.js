

const productModel = require( "../models/Products" );

exports.HomeController = [
	getHomePage = ( req, res ) => {
		fetchAllProducts( products => {
			const viewsData = {
				admin: false,
				products,
				pageTitle: "Home page - Products List"
			};
			res.render( "index", viewsData );
			console.clear();
			console.log( req.body );
		} );
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
	getReturnsPolicyPage = ( req, res, next ) => {
		const viewsData = {
			pageTitle: "Pikituchos - Política de trocas e devoluções"
		};
		res.render( "returns-policy", viewsData );
	},
	getPrivacyPolicyPage = ( req, res, next ) => {
		const viewsData = {
			pageTitle: "Pikituchos - Política de privacidade"
		};
		res.render( "privacy-policy", viewsData );
	},
	getPoliticaDeEntregaPage = ( req, res, next ) => {
		const viewsData = {
			pageTitle: "Pikituchos - Política de entrega"
		};
		res.render( "politica-de-entrega", viewsData );
	},
	getQuemSomosPage = ( req, res, next ) => {
		const viewsData = {
			pageTitle: "Quem Somos"
		};
		res.render( "quem-somos", viewsData );
	},
	getSegurancaPage = ( req, res, next ) => {
		const viewsData = {
			pageTitle: "Segurança"
		};
		res.render( "seguranca", viewsData );
	},
];