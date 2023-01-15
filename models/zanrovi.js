'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Zanrovi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Filmovi, Serije}) {
      // define association here
      this.hasMany(Serije, {foreignKey: 'zanrId', as: "serije", onDelete:'cascade', hooks:true} )
      this.hasMany(Filmovi, {foreignKey: 'zanrId', as: "filmovi", onDelete:'cascade', hooks:true} )
    }
  }
  Zanrovi.init({
    naziv: {
      type: DataTypes.STRING,
      allowNull: false
    },
    opis: {
      type: DataTypes.STRING(10000),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Zanrovi',
  });
  return Zanrovi;
};