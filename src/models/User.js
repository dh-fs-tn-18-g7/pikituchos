module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id: { 
            type: DataTypes.INTEGER(10), 
            primaryKey: true, 
            autoIncrement: true, 
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
    
          endereco_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
          },
    
          is_admin: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false
          }
    }, {
        tablename: 'users'
    })

    Users.associate = (models) => {
        Users.belongsTo(models.enderecos, {
            constraint: true,
            foreignKey: 'endereco_id'
        })
    }
}