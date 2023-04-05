

const productModel = require( "../models/Products" ),
	Products0_1Data = require( "../utils/products_0-1" );

exports.HomeController = [
	getHomePage = ( req, res ) => {
		fetchAllProducts( products => {
			const viewsData = {
				admin: false,
				products,
				pageTitle: "Home page - Products List",
				moms: [
					{
						name: "Jady Carolina",
						pix: "Jady-Carolina.webp",
						text: "❛❛ Passando para agradecer. Amei! muito rápido! Adorei fazer compras no site. E amei o brinde 🥰😍 Atendimento encantador.",
						stars: "5"
					},
					{
						name: "Noely Gangello",
						pix: "Noely-Gangello.webp",
						text: "❛❛ Voltei para agradecer, chegou tudo perfeito amei demais, meu filho amou o mimo. Super satisfeita com minha compra. Bjs e obrigada 😘",
						stars: "5"
					},
					{
						name: "Rafaela Melo",
						pix: "Rafaela-Melo.webp",
						text: "❛❛ Gente as roupinhas são lindas de verdade, ótima qualidade. Eu compro sempre aqui pelo site! Entrega super rápida o atendimento perfeito! 🥰😍😘",
						stars: "5"
					},
				],
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
			pageTitle: "Pikituchos - Segurança",
			title: "Segurança",
			email: "saq@pikituchos.com.br",
			tel: "(13) 9 9117-6924",
			whats: "(13) 9 9117-6924",
			whatsPhone: "5513991176924",
			whatsText: "Olá, vim do site Pikituchos e gostaria de realizar um agendamento. 😊",
		};
		res.render( "seguranca", viewsData );
	},
	getTestesPage = ( req, res, next ) => {
		const viewsData = {
			pageTitle: "Pikituchos - Testes",
			title: "Testes",
			email: "saq@pikituchos.com.br",
			tel: "(13) 9 9117-6924",
			whats: "(13) 9 9117-6924",
			products1: Products0_1Data.products0_1,
		};
		console.log( viewsData.products1.title );
		res.render( "teste", viewsData );
	},
];