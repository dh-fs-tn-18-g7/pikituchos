'use strict';

const { NUMBER } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('produtos', { 
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },

      ref: {
        type: Sequelize.STRING,
        allowNull: false
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false
      },

      cover: {
        type: Sequelize.STRING,
        allowNull: false
      },

      image: {
        type: Sequelize.STRING,
        allowNull: false
      },

      image01: {
        type: Sequelize.STRING,
        allowNull: false
      },

      image02: {
        type: Sequelize.STRING,
        allowNull: false
      },

      image03: {
        type: Sequelize.STRING,
        allowNull: false
      },

      group: {
        type: Sequelize.STRING,
        allowNull: false
      },

      price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },

      cents: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },

      oldPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },

      description: {
        type: Sequelize.STRING,
        allowNull: false
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    
    });
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('produtos');
    
  }
};
