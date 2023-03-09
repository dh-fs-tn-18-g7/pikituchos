const getInfoFromDataBase = require('../utils/getInfoFromDataBase')

const LoginController = {
    listAll: (request, response) => {
        const users = getInfoFromDataBase("users")
        return response.json(users)    
    },

    listOne: (request, response) =>{
       const id =  request.params.id
       const users = getInfoFromDataBase("users")
       const userFound = users.find((user) => user.id===id)

       if(!userFound){
        response.json({message: "Não existe nenhum usuário com esse id"})
       }
       return response.json(userFound)
    },

    showLogin: (request, response) => {
        return response.render('/auth/login')
    }

}

module.exports = LoginController