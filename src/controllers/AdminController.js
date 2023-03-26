/* Models */
const databese = require("../database/db.json");

/* Controller */

const AdminController = {
  showLogin: (req, res) => {
    res.render("admin/login");
  },

  login: (req, res) => {
    const user = databese.users;
    const { email, password } = req.body;
    console.log(password);
    const userFound = user.find((user) => user.email === email); //
    console.log(userFound);

    if (!userFound) {
      console.login("usuario invalido");
      return;
    }

    const isValidPassword = userFound.password === password;

    console.log(isValidPassword);

    if (!isValidPassword) {
        console.log("E-mail ou senha invalidos");
        return
    }

    console.log( userFound.isAdmin)
   
    if (userFound.isAdmin === false ) {
        
      return res.redirect("/");
    }
    
    return res.redirect("/admin/home"); 
  },
};

module.exports = AdminController;
