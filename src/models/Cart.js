

const fs = require( "fs" ),
    path = require( "path" ),
    rootDir = require( "../utils/path" );

exports.CartModel = [
    getCartDetailsFromFile = ( handler ) => {
        const cartPath = path.join( rootDir, "../data", "cart.json" );
        fs.readFile( cartPath, ( error, cartContent ) => {
            let cart = { products: [] };
            if( !error ) {
                cart = JSON.parse( cartContent );
                // cart.products = JSON.parse( cartContent );
            }
            return handler( cart );
        } );
    },
    addProduct2Cart = ( productId, productPrice ) => {
    //     console.log( `\x1b[33moi
    // ================================
    // productPrice:
    // ${productPrice}` );

        const cartPath = path.join( rootDir, "../data", "cart.json" );
        getCartDetailsFromFile( cart => {
            // console.log( `\x1b[33moi`,cart.products.findIndex( p => p.id.toString() == "1679646792617") );
            const Cart = { ...cart };
            console.log( `\x1b[33moi`,Cart );
            console.log( `\x1b[33moi`,Cart.products.findIndex( p => p.id.toString() == "1679646811096") );

            let existingProductIndex = Cart.products.findIndex( p => p.id.toString() === productId );

            let updatedProduct;

            if( existingProductIndex !== -1 ) {
                updatedProduct = { ...Cart.products[ existingProductIndex ] };
                updatedProduct.quantity += 1;
                Cart.products = [ ...Cart.products ];
                Cart.products[ existingProductIndex ] = updatedProduct;
            } else {
                updatedProduct = { id: productId, quantity: 1 };
                Cart.products = [ ...Cart.products, updatedProduct ];
            }

            // cart.totalPrice += +productPrice;
            fs.writeFile( cartPath, JSON.stringify( Cart ), error => {
                console.log( error );
            } );
            /* let existingProductIndex = cart.products.findIndex( p => p.id.toString() === productId );

            let updatedProduct;

            if( existingProductIndex !== -1 ) {
                updatedProduct = { ...cart.products[ existingProductIndex ] };
                updatedProduct.quantity += 1;
                cart.products = [ ...cart.products ];
                cart.products[ existingProductIndex ] = updatedProduct;
            } else {
                updatedProduct = { id: productId, quantity: 1 };
                cart.products = [ ...cart.products, updatedProduct ];
            }

            // cart.totalPrice += +productPrice;
            fs.writeFile( cartPath, JSON.stringify( cart ), error => {
                console.log( error );
            } );  */
        } );
    },
    deleteProductFromCart = ( productId, handler = "" ) => {
        const cartPath = path.join( rootDir, "../data", "cart.json" );
        getCartDetailsFromFile( cart => {
            let cartProducts = cart.products,
                updatedCartProducts = cartProducts.filter( p => p.id.toString() !== productId.toString() );
                
            // fs.writeFile( cartPath, JSON.stringify( updatedCartProducts ), error => {
            fs.writeFile( cartPath, JSON.stringify( { products: updatedCartProducts } ), error => {
                console.log( error );
            } ); 
            if( handler ) {
                handler();
            }
        } );
    },
];


// const fs = require( "fs" ),
//     path = require( "path" ),
//     rootDir = require( "../utils/path" );

// exports.getCartDetailsFromFile = ( handler ) => {
//     const cartPath = path.join( rootDir, "../data", "cart.json" );
//     fs.readFile( cartPath, ( error, cartContent ) => {
//         let cart = { products: [] };
//         if( !error ) {
//             cart = JSON.parse( cartContent );
//             // cart.products = JSON.parse( cartContent );
//         }
//         return handler( cart );
//     } );
// };

// exports.addProduct2Cart = ( productId, productPrice ) => {
// //     console.log( `\x1b[33moi
// // ================================
// // productPrice:
// // ${productPrice}` );

//     const cartPath = path.join( rootDir, "../data", "cart.json" );
//     this.getCartDetailsFromFile( cart => {
//         // console.log( `\x1b[33moi`,cart.products.findIndex( p => p.id.toString() == "1679646792617") );
//         const Cart = { ...cart };
//         console.log( `\x1b[33moi`,Cart );
//         console.log( `\x1b[33moi`,Cart.products.findIndex( p => p.id.toString() == "1679646811096") );

//         let existingProductIndex = Cart.products.findIndex( p => p.id.toString() === productId );

//         let updatedProduct;

//         if( existingProductIndex !== -1 ) {
//             updatedProduct = { ...Cart.products[ existingProductIndex ] };
//             updatedProduct.quantity += 1;
//             Cart.products = [ ...Cart.products ];
//             Cart.products[ existingProductIndex ] = updatedProduct;
//         } else {
//             updatedProduct = { id: productId, quantity: 1 };
//             Cart.products = [ ...Cart.products, updatedProduct ];
//         }

//         // cart.totalPrice += +productPrice;
//         fs.writeFile( cartPath, JSON.stringify( Cart ), error => {
//             console.log( error );
//         } );
//         /* let existingProductIndex = cart.products.findIndex( p => p.id.toString() === productId );

//         let updatedProduct;

//         if( existingProductIndex !== -1 ) {
//             updatedProduct = { ...cart.products[ existingProductIndex ] };
//             updatedProduct.quantity += 1;
//             cart.products = [ ...cart.products ];
//             cart.products[ existingProductIndex ] = updatedProduct;
//         } else {
//             updatedProduct = { id: productId, quantity: 1 };
//             cart.products = [ ...cart.products, updatedProduct ];
//         }

//         // cart.totalPrice += +productPrice;
//         fs.writeFile( cartPath, JSON.stringify( cart ), error => {
//             console.log( error );
//         } );  */
//     } );
// };

// exports.deleteProductFromCart = ( productId, handler = "" ) => {
//     const cartPath = path.join( rootDir, "../data", "cart.json" );
//     this.getCartDetailsFromFile( cart => {
//         let cartProducts = cart.products,
//             updatedCartProducts = cartProducts.filter( p => p.id.toString() !== productId.toString() );
            
//         // fs.writeFile( cartPath, JSON.stringify( updatedCartProducts ), error => {
//         fs.writeFile( cartPath, JSON.stringify( { products: updatedCartProducts } ), error => {
//             console.log( error );
//         } ); 
//         if( handler ) {
//             handler();
//         }
//     } );
// };
