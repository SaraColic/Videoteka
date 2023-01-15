'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Korisnici extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Iznajmljeni, Komentari}) {
      // define association here
      this.hasMany(Komentari, {foreignKey: 'korisnikId', as: "komentari", onDelete:'cascade', hooks:true} )
      this.hasMany(Iznajmljeni, {foreignKey: 'korisnikId', as: "iznajmljeni", onDelete:'cascade', hooks:true} )
    }
  }
  Korisnici.init({
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
    }
  }, {
    sequelize,
    modelName: 'Korisnici',
  });
  return Korisnici;
};