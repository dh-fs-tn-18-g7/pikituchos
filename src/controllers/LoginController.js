const { User } = require('../models')
const bcrypt = require('bcryptjs')

const loginController = {
    showLogin: (req,res)=>{
        res.render("auth/login")
    },

    login: async (req, res) => {
        
        const { email, senha } = req.body

        const userFound = await User.findOne({
            where: {
                email: email,
            }
        })
        
        console.log(userFound)

        const verifyPassword = userFound ? bcrypt.compareSync(senha, userFound.senha) : false

        if(!verifyPassword) {
            console.log("email ou senha inválidos")
            return res.render("auth/login", { error: "Email ou senha invalidos" })
        }

        req.session.user = userFound

        return res.redirect('/')

    }
}

module.exports = loginController