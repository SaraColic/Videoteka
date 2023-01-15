'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Korisnicis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      ime: {
        type: DataTypes.STRING,
        allowNull: false
      },
      prezime: {
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 300]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { 
          isEmail: {  
            msg: "Email adresa nije validna!" 
          }
        }
      } ,
      tip: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min:0,
          max:2
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
    await queryInterface.dropTable('Korisnicis');
  }
};