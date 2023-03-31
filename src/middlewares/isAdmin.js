const isAdmin = (req, res, next) => {
    const {user} = req.session

    if(!user || !user.is_admin){
        return res.redirect('/')
    }

    return next()
}

module.exports = isAdmin