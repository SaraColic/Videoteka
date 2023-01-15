'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Direktor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Filmovi, Serije}) {
      // define association here
      this.hasMany(Filmovi, {foreignKey: 'direktorId', as: "filmovi", onDelete:'cascade', hooks:true} )
      this.hasMany(Serije, {foreignKey: 'direktorId', as: "serije", onDelete:'cascade', hooks:true} )
    }
  }
  Direktor.init({
    ime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prezime: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Direktor',
  });
  return Direktor;
};