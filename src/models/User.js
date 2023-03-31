module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: { 
            type: DataTypes.STRING(100), 
            primaryKey: true,  
            allowNull: false 
          }, 

          senha: { 
            type: DataTypes.STRING(50), 
            allowNull: false 
          }, 
          
          name: { 
            type: DataTypes.STRING(50), 
            allowNull: false 
          }, 
    
          email: { 
            type: DataTypes.STRING(50), 
            allowNull: false 
          }, 
    
          telefone: { 
            type: DataTypes.STRING(20), 
            allowNull: false 
          }, 
    
          cpf: { 
            type: DataTypes.STRING(20), 
            allowNull: false 
          }, 
    
          data_de_nascimento: { 
            type: DataTypes.STRING(10), 
            allowNull: false 
          }, 
    
          is_admin: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false
          },

          rua: {
            type: DataTypes.STRING(100),
            allowNull: false
          },
    
          numero: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
    
          cep: {
            type: DataTypes.STRING(50),
            allowNull: false
          },
    
          cidade: {
            type: DataTypes.STRING(50),
            allowNull: false
          },
    
          estado: {
            type: DataTypes.STRING(50),
            allowNull: false
          },
    }, {
        tablename: 'users'
    })
      return User
}