const { randomUUID } = require("crypto")
const { hashSync } = require('bcryptjs')

const { User } = require('../models')


const CadastroController = {
    showCadastro: (req, res) => {
        const url = req.originalUrl
        res.render('auth/cadastro', {url})
    },
    
    store: async (req, res) => {
        var {email, senha, cpf, telefone, name, data_de_nascimento, cep, numero, compl, rua, cidade, estado, is_admin} = req.body

        const verifyUserExists = await User.findOne({
            where: {
                email: email
            }
        })

        if(verifyUserExists){
            return res.render('auth/cadastro', { error: "Email já cadastrado" })
        }

        if(!compl){
            var compl = 0
        }

        const newUser = {
            id: randomUUID(),
            email,
            senha: hashSync(senha, 10),
            cpf,
            telefone,
            name,
            data_de_nascimento,
            is_admin: false,
            cep,
            numero,
            compl,
            rua,
            cidade,
            estado
        }

        if(!newUser){
            res.render('cadastro')
        }

        console.log(newUser)

        await User.create(newUser)

        

        return res.redirect('/login')
    },

    delete: async (req, res) => {
        const { id } = req.params

        User.destroy({
            where: {
                id: id
            }
        })
    }
}



module.exports = CadastroController