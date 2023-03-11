const { randomUUID } = require('crypto')


const CadastroController = {
    showCadastro: (req, res) => {
        const url = req.originalUrl
        return res.render('cadastro', { url })
        console.log(url)
    },
    create:(req, res) => {
        console.log(req.body)

        const { email, senha, cpf, celular, nome, data, cep, number, compl, endereco, cidade, estado } = req.body
        const newUser = {
            id: randomUUID(),
            email,
            senha,
            cpf,
            celular,
            nome,
            data,
            cep,
            number,
            compl,
            endereco,
            cidade,
            estado
        }
        console.log(newUser)
        
    }
}

module.exports = CadastroController