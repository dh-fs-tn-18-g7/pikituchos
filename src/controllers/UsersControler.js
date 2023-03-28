const UserController = {
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
        res.render('userCards')

    }

}

module.exports = UserController