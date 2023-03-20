

const { check } = require( "express-validator" );


const loginFormValidationMiddleware = [
	check( "email" )
		.trim().bail()
		.notEmpty().withMessage( "Este campo é obrigatório!" ).bail()
		.isEmail().withMessage( "Formato de email incorreto!" )
	,
	check( "password" )
		.trim().bail()
		.notEmpty().withMessage( "Este campo é obrigatório!" ).bail()
		.isLength( { min:6 } ).withMessage( "Escolha uma senha com 6 caracteres" )
];



/* [ exports ]
================================= */
module.exports = loginFormValidationMiddleware;