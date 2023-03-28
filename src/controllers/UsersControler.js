const UserController = {
    showUser: (req, res)=>{
        const url = req.originalUrl
        console.log(url)
        res.render("usuario", { url })
    }
}

module.exports = UserController