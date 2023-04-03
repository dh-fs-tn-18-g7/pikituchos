const logged = (req, res, next) => {
    if(req.session.user) {
        res.locals.user = req.session.user
    } else{
        return res.redirect('/login')
    }

    return next()
}


module.exports = logged