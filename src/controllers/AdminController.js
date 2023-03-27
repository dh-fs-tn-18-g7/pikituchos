/* Models */
const databese = require("../database/db.json");
const produtosDb = require("../database/produtos.json");

/* Controller */

const AdminController = {
  showAdminHome: (req, res) => {
    const produtos = produtosDb.produtos;
    res.render("admin/adminHome", { produtos });
  },

  showCadastro: (req, res) => {
    res.render("admin/adminCadastro");
  },
  showProdutos: (req, res) => {
    const produtos = produtosDb.produtos;
    res.render("admin/adminProdutos", { produtos });
  },

  cadastrarProduto: (req, res) => {
    



  },
};

module.exports = AdminController;
