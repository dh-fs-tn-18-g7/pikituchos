

const mysql = require( "mysql2" );

const db = mysql.createPool( {
    host: "localhost",
    user: "root", password: "password",
    database: "PK_ecommerce_app"
} );

module.exports = db.promise();

// const db = mysql.createPool( {
//     host: "localhost", user: "root", password: "password",
//     database: "PK_ecommerce_app"
// } );

// db.query(
//     `SELECT * FROM PK_ecommerce_app.produtos;`,
//     ( error, result, fields ) => {
//         console.log( error, result, fields );
//     }
// );
// db.execute(
//     `SELECT * FROM PK_ecommerce_app.produtos where id > 0;`, [0],
//     ( error, result, fields ) => {
//         console.log( error, result, fields );
//     }
// );