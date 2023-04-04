'use strict'; 
const { STRING, DOUBLE, NUMBER, INTEGER, BOOLEAN } = require('sequelize'); /** 
@type {import('sequelize-cli').Migration} */ 
module.exports = { 
  async up(queryInterface, Sequelize) { 
    
    await queryInterface.createTable('users', { 
      id: { 
        type: Sequelize.STRING(100), 
        primaryKey: true,  
        allowNull: false 
      }, 

      senha: { 
        type: Sequelize.STRING(200), 
        allowNull: false 
      }, 
      
      name: { 
        type: Sequelize.STRING(50), 
        allowNull: false 
      }, 

      email: { 
        type: Sequelize.STRING(50), 
        allowNull: false 
      }, 

      telefone: { 
        type: Sequelize.STRING(50), 
        allowNull: false 
      }, 

      cpf: { 
        type: Sequelize.STRING(50), 
        allowNull: false 
      }, 

      data_de_nascimento: { 
        type: Sequelize.STRING(50), 
        allowNull: false 
      }, 

      is_admin: { 
        type: Sequelize.BOOLEAN, 
        allowNull: false
      }, 

      rua: {
        type: Sequelize.STRING(100),
        allowNull: false
      },

      numero: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    },

      cep: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

      cidade: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

      estado: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

        
      createdAt: Sequelize.DATE, 
      updatedAt: Sequelize.DATE 
    }); 
  }, 
  
  async down(queryInterface, Sequelize) { 
    
    await queryInterface.dropTable('users'); 
    
  } 
};
