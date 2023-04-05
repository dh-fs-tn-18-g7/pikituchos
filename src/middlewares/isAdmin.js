const isAdmin = (req, res, next) => {
    const {user} = req.session
    console.log(req.session)
    

    if(!user || !user.is_admin){
        return res.redirect('/user')
    }

    return next()
}

module.exports = isAdmin