

const fs = require( "fs" ),
    path = require( "path" ),
    rootDir = require( "../utils/path" ),
    CartModel = require("./Cart");


const getProductsFromFile = handler => {
    const productsPath = path.join( rootDir, "../data", "products.json" );
    fs.readFile( productsPath, ( error, productsData ) => {
        if( error ) {
            return handler( [] );
        }
        return handler( JSON.parse( productsData ) );
    } );
}

exports.ProductModel = [
    saveProduct = product => {
        const productsPath = path.join( rootDir, "../data", "products.json" );
        getProductsFromFile( productsData => {
            productsData.push( product );
            fs.writeFile( productsPath, JSON.stringify( productsData ), ( error ) => {
                console.log( error );
            } );
        } );
    },
    fetchAllProducts = ( handler ) => {
        getProductsFromFile( handler );

        const productsPath = path.join( rootDir, "../data", "products.json" );
        fs.readFile( productsPath, ( error, productsData ) => {
            let products = [];
            products = JSON.parse( productsData );
            handler( products );
        } );
    },
    getProductById = ( productId, handler ) => {
        getProductsFromFile( products => {
            const product = products.find( p => p.id.toString() == productId );
            handler( product );
        } );
    },
    updateProductIdById = ( product, productId ) => {
        const productsPath = path.join( rootDir, "../data", "products.json" );
        getProductsFromFile( products => {
            const existingProductIndex = products.findIndex( p => p.id.toString() == productId );

            const updatedProducts = [ ...products ];
            updatedProducts[ existingProductIndex ] = product;

            fs.writeFile( productsPath, JSON.stringify( updatedProducts ), error => console.log( error ) );
        } );
    },
    deleteProductById = ( productId, handler ) => {
        const productsPath = path.join( rootDir, "../data", "products.json" );
        getProductsFromFile( products => {
            let updatedProducts = products.filter( product => product.id.toString() != productId.toString() );
            deleteProductFromCart( productId );
            fs.writeFile( productsPath, JSON.stringify( updatedProducts ), error => console.log( error ) );
            handler();
        } );
    },
];
// ============================================


// const fs = require( "fs" ),
//     path = require( "path" ),
//     rootDir = require( "../utils/path" ),
//     { deleteProductFromCart } = require("./Cart");


// const getProductsFromFile = handler => {
//     const productsPath = path.join( rootDir, "../data", "products.json" );
//     fs.readFile( productsPath, ( error, productsData ) => {
//         if( error ) {
//             return handler( [] );
//         }
//         return handler( JSON.parse( productsData ) );
//     } );
// }

// exports.saveProduct = product => {
//     const productsPath = path.join( rootDir, "../data", "products.json" );
//     getProductsFromFile( productsData => {
//         productsData.push( product );
//         fs.writeFile( productsPath, JSON.stringify( productsData ), ( error ) => {
//             console.log( error );
//         } );
//     } );
// };

// exports.fetchAllProducts = ( handler ) => {
//     getProductsFromFile( handler );

//     const productsPath = path.join( rootDir, "../data", "products.json" );
//     fs.readFile( productsPath, ( error, productsData ) => {
//         let products = [];
//         products = JSON.parse( productsData );
//         handler( products );
//     } );
// };

// exports.getProductById = ( productId, handler ) => {
//     getProductsFromFile( products => {
//         const product = products.find( p => p.id.toString() == productId );
//         handler( product );
//     } );
// };

// exports.updateProductIdById = ( product, productId ) => {
//     const productsPath = path.join( rootDir, "../data", "products.json" );
//     getProductsFromFile( products => {
//         const existingProductIndex = products.findIndex( p => p.id.toString() == productId );

//         const updatedProducts = [ ...products ];
//         updatedProducts[ existingProductIndex ] = product;

//         fs.writeFile( productsPath, JSON.stringify( updatedProducts ), error => console.log( error ) );
//     } );
// };

// exports.deleteProductById = ( productId, handler ) => {
//     const productsPath = path.join( rootDir, "../data", "products.json" );
//     getProductsFromFile( products => {
//         let updatedProducts = products.filter( product => product.id.toString() != productId.toString() );
//         deleteProductFromCart( productId );
//         fs.writeFile( productsPath, JSON.stringify( updatedProducts ), error => console.log( error ) );
//         handler();
//     } );
// };
// // ============================================
