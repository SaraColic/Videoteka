'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Sezones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      naziv: {
        type: DataTypes.STRING,
        allowNull: false
      },
      opis: {
        type: DataTypes.STRING(10000)
      },
      ocena: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min:0,
          max:10
        }
      },
      cena:{
         type: DataTypes.INTEGER,
         allowNull: true,
         validate: {
          min:0
         }
      },
      serijaId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Serijes',
          key: 'id',
          as: 'serijaId',
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Sezones');
  }
};