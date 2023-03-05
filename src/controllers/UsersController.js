const getInfoFromDataBase = require ('../utils/getInfoFromDataBase')

const UsersController = {
    listAll: (request, response) => {
        const users = getInfoFromDataBase('users')
        return response.json(users)
    }

}

module.exports = UsersController