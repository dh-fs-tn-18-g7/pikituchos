const getInfoFromDataBase = require('../utils/getInfoFromDataBase')

const UsersController = {
    listAll: (request, response) => {
        const users = getInfoFromDataBase("users")
        return response.json(users)    
    },

    listOne: (request, response) =>{
       const id =  request.params.id
    }

}

module.exports = UsersController