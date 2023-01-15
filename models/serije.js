'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Serije extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({Glumci, Direktor, Zanrovi, Sezone}) {
      this.belongsTo(Direktor, {foreignKey: 'direktorId', as: 'direktor'});
      this.belongsTo(Zanrovi, {foreignKey: 'zanrId', as: 'zanr'});
      this.belongsTo(Glumci, {foreignKey: 'glumacId', as: 'glumac'});
      this.hasMany(Sezone, {foreignKey: 'serijaId', as: "sezone", onDelete:'cascade', hooks:true} )
      // define association here
    }
  }
  Serije.init({
    naziv: {
      type: DataTypes.STRING,
      allowNull: false
    },
    opis: DataTypes.STRING(10000),
    ocena: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min:0,
        max:10
      }
    },
  }, {
    sequelize,
    modelName: 'Serije',
  });
  return Serije;
};