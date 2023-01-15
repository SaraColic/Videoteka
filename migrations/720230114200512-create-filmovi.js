'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Filmovis', {
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
      video: {
        type: DataTypes.STRING,
        allowNull: false
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
      besplatan: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      direktorId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Direktors',
          key: 'id',
          as: 'direktorId',
        }
      },
      glumacId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Glumcis',
          key: 'id',
          as: 'glumacId',
        }
      },
      zanrId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Zanrovis',
          key: 'id',
          as: 'zanrJd',
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
    await queryInterface.dropTable('Filmovis');
  }
};