

const dataBase = require( "../data-base/dataBase.json" ),
	fs = require( "fs" ),
	path = require( "path" ),
	dataBasePath = path.resolve( "src", "data-base", "dataBase.json" );

const UserModel = {
	findAll: () => {
		return dataBase.users;
	},
	findOne: userEmail => {
		const users = dataBase.users;
		const userFound = users.find( user => user.email == userEmail );

		if( userFound == undefined ) { return false; }

		return userFound;
	},
	findByPk: userId => {
		const users = dataBase.users;
		const userFound = users.find( user => user.id == userId );

		if( !userFound ) { return false; }

		return userFound;
	},
	create: user => {
		dataBase.users.push( user );
		const dbJSON = JSON.stringify( dataBase );
		fs.writeFileSync( dataBasePath, dbJSON );

		return true;
	},
	update: ( userId, user ) => {
		const users = dataBase.users;
		const userIndex = users.findIndex( user => user.id == userId );
		console.log( userIndex );

		if( userIndex == undefined ) { return false; }

		dataBase.users.splice( userIndex, 1, user );
		const dbJSON = JSON.stringify( dataBase );
		fs.writeFileSync( dataBasePath, dbJSON );

		return true;
	},
	destroy: userId => {
		const users = dataBase.users;
		const userIndex = users.findIndex( user => user.id == userId );

		if( !userIndex ) { return false; }

		dataBase.users.splice( userIndex, 1 );

		const dbJSON = JSON.stringify( dataBase );
		fs.writeFileSync( dataBasePath, dbJSON );

		return true;
	}
};



/* [ exports ]
================================= */
module.exports = UserModel;

