'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Iznajmljenis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      datumIsteka: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      filmId:{
        type: DataTypes.INTEGER,
        allowNull: true,
        onDelete: 'CASCADE',
        references: {
          model: 'Filmovis',
          key: 'id',
          as: 'filmId',
        }
      },
      sezonaId:{
        type: DataTypes.INTEGER,
        allowNull: true,
        onDelete: 'CASCADE',
        references: {
          model: 'Sezones',
          key: 'id',
          as: 'sezonaId',
        }
      },
      korisnikId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Korisnicis',
          key: 'id',
          as: 'korisnikId',
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
    await queryInterface.dropTable('Iznajmljenis');
  }
};