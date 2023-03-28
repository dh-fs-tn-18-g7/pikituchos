

const CartModel = require("../models/Cart"),
    ProductModel = require( "../models/Products" );

exports.CartController = [
    postCartPage = ( req, res ) => {
        // console.log( req.body );
        const productId = req.body.productId;
        getProductById( productId, product => {
            addProduct2Cart( productId, product.price );
            res.redirect( "/" );
        } );
    },
    getCartPage = ( req, res ) => {
        // console.log( req.body );
        getCartDetailsFromFile( cart => {
            const cartProducts = cart.products;

            fetchAllProducts( products => {
                const productsData = [];
                let totalPrice = 0;
                for( let item of cartProducts ) {
                    let Product = products.find( p => p.id.toString() == item.id.toString() );
                    cartProductPrice = +item.quantity * +Product.price;
                    totalPrice += cartProductPrice;
                    productsData.push( {
                            ...Product,
                            quantity: item.quantity,
                            cartPrice: cartProductPrice
                    } );
                }
                const viewsData = {
                    pageTitle: "Cart PageDetails",
                    cartProducts: productsData,
                    totalPrice
                };
                // console.log( viewsData );
                res.render( "cart", viewsData );
            } );

        } );
    },
    deleteCartItem = ( req, res ) => {
        const productId = req.body.productId;
        deleteProductFromCart( productId, () => res.redirect( "/cart" ) );
    },
];

// const { addProduct2Cart,
//     getCartDetailsFromFile, 
//     deleteProductFromCart } = require("../models/Cart"),
//     { getProductById,
//         fetchAllProducts } = require( "../models/Products" );

// exports.postCartPage = ( req, res ) => {
//     // console.log( req.body );
//     const productId = req.body.productId;
//     getProductById( productId, product => {
//         addProduct2Cart( productId, product.price );
//         res.redirect( "/" );
//     } );
// };

// exports.getCartPage = ( req, res ) => {
//     // console.log( req.body );
//     getCartDetailsFromFile( cart => {
//         const cartProducts = cart.products;

//         fetchAllProducts( products => {
//             const productsData = [];
//             let totalPrice = 0;
//             for( let item of cartProducts ) {
//                 let Product = products.find( p => p.id.toString() == item.id.toString() );
//                 cartProductPrice = +item.quantity * +Product.price;
//                 totalPrice += cartProductPrice;
//                 productsData.push( {
//                         ...Product,
//                         quantity: item.quantity,
//                         cartPrice: cartProductPrice
//                 } );
//             }
//             const viewsData = {
//                 pageTitle: "Cart PageDetails",
//                 cartProducts: productsData,
//                 totalPrice
//             };
//             // console.log( viewsData );
//             res.render( "cart", viewsData );
//         } );

//     } );
// };

// exports.deleteCartItem = ( req, res ) => {
//     const productId = req.body.productId;
//     deleteProductFromCart( productId, () => res.redirect( "/cart" ) );
// };