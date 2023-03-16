const AuthController = {
    showLogin: (req, res) => {
        res.render('auth/login')
    },

    showCadastro: (req, res) => {
        res.render('auth/cadastro')
    }
}

module.exports = AuthController