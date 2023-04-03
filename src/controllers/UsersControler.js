const UserController = {
<<<<<<< HEAD
    showUser: (req,res)=>{
        res.render("userHome")
    }, 

    ShowUserDadosPessoais: (req,res)=>{
        res.render('userDadosPessoais')

    },
    ShowUserPedidos:(req,res)=>{
        res.render('userPedidos')

    },
    ShowUserInfoConta:(req,res)=>{
        res.render('userInfoConta')

    },
    ShowUserCard:(req,res)=>{
        res.render('userCard')

=======
    showUser: (req, res)=>{
        const url = req.originalUrl
        console.log(url)
        res.render("usuario", { url })
>>>>>>> 3c83331bffca7af4a23fde768c6719df932c699b
    }

}

module.exports = UserController