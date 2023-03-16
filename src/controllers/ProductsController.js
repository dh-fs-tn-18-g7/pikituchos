const ProductsController = {
    showProduto: (req, res) => {
        res.render('produto')
    },
    showCarrinho: (req, res) => {
        res.render('auth/checkout')
    }
}

module.exports = ProductsController