

const isAdminMiddleware = ( req, res, next )=>{

	const { userLogged } = req.session;
    
	if( !userLogged || !userLogged.isAdmin ) {
		return res.redirect( "/" );
	}

	return next();
};



/* [ exports ]
================================= */
module.exports = isAdminMiddleware;
