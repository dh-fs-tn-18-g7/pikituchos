'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('enderecos', { 
      endereco_id: {
        type: Sequelize.INTEGER(10),
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false,
      },
      rua: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

      numero: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    },

      cep: {
        type: Sequelize.INTEGER(50),
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
      updateAt: Sequelize.DATE 
      
    });
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('enderecos');
    
  }
};
