

const { User, Address } = require( "../models" );

async function getUsers() {
	const users = await User.findAll( {
		include:[ {
			model: Address,
			as: "address",
			require: false
		} ], raw: false
	} );
    
	users.forEach( user => {
		console.log( `===========================
Nome do usuário:${ user.name }
cpf: ${ user.cpf }
email: ${ user.email }
telefone: ${ user.tel }
senha: ${ user.password }
isAdmin: ${ user.is_admin }
Endereço: ${ user.address.public_place } - ${ user.address.number }
bairro: ${ user.address.district }
cidade: ${ user.address.city } - ${ user.address.state}
===========================` );
	} );
}



async function getUser() {

	const id = "3i5u2k6j9l2f5i8g7z3d8n7r6q7t1h5a2w3x2b9";

	const user = await User.findOne( {
		where: { id:id },    
	} );

	console.log( user );

}

async function getUserByPk() {

	const id = "3i5u2k6j9l2f5i8g7z3d8n7r6q7t1h5a2w3x2b9";
	const user = await User.findByPk( id, {
		include:{
			model:Address,
			as:"address",
			require:false
		},
		raw:false
	} );

	console.log( user );
}




/* [ tests ]
================================= */
getUsers();
getUser();
getUserByPk();
