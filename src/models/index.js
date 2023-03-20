

"use strict";

const fs = require( "fs" ),
	path = require( "path" ),
	Sequelize = require( "sequelize" ),
	process = require( "process" ),
	basename = path.basename( __filename ),
	config = require( __dirname + "/../database/config.js" ),
	db = {};

let sequelize;

if( config.use_env_variable ) {
	sequelize = new Sequelize( process.env[config.use_env_variable], config );
} else {
	sequelize = new Sequelize( config.database, config.username, config.password, config );
}

fs.readdirSync( __dirname ).filter( file => {
	return (
		file.indexOf( "." ) !== 0 &&
      file !== basename &&
      file.slice( -3 ) === ".js" &&
      file.indexOf( ".test.js" ) === -1
	);
} )
	.forEach( file => {
		const model = require( path.join( __dirname, file ) )( sequelize, Sequelize.DataTypes );
		db[model.name] = model;
	} );

Object.keys( db ).forEach( modelName => {
	if( db[modelName].associate ) {
		db[modelName].associate( db );
	}
} );

db.sequelize = sequelize;
db.Sequelize = Sequelize;




/* [ exports ]
================================= */
module.exports = db;
