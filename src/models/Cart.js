

const fs = require( "fs" ),
	path = require( "path" ),
	rootDir = require( "../utils/path" );

exports.getCartDetailsFromFile = handler => {

    const cartPath = path.join( rootDir, "../data", "cart.json" );
    fs.readFile( cartPath, ( error, cartContent ) => {
        let cart = { products: [] };
        if( !error ) {
            cart = JSON.parse( cartContent );
        }
        console.clear();
        console.log( `\x1b[33mmodels/Cart.js:`, cart );
        return handler( cart );
    } );
};
exports.addProduct2Cart = ( productId, productPrice ) => {

    const cartPath = path.join( rootDir, "../data", "cart.json" );
    this.getCartDetailsFromFile( cart => {

        let existingProductIndex = cart.products.findIndex( p => p.id.toString() == productId );

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

        fs.writeFile( cartPath, JSON.stringify( cart ), error => {
            console.log( error );
        } );
    } );
};
exports.deleteProductFromCart = ( productId, handler = "" ) => {
    const cartPath = path.join( rootDir, "../data", "cart.json" );
    this.getCartDetailsFromFile( cart => {
        let cartProducts = cart.products,
            updatedCartProducts = cartProducts.filter( p => p.id.toString() !== productId.toString() );
            
        // fs.writeFile( cartPath, JSON.stringify( updatedCartProducts ), error => {
        fs.writeFile( cartPath, JSON.stringify( { products: updatedCartProducts } ), error => {
            console.log( error );
        } ); 
        if( handler ) { handler(); }
    } );
};
exports.getTotalCartItems = () => {
    let cartItems = [];

    this.getCartDetailsFromFile( cart => {
        
    } );
};

