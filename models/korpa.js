'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Korpa extends Model {
    static associate({Filmovi, Serije, Korisnici}) {
      this.belongsTo(Filmovi, {foreignKey: 'filmId', as: 'film'});
      this.belongsTo(Serije, {foreignKey: 'serijaId', as: 'serija'});
      this.belongsTo(Korisnici, {foreignKey: 'korisnikId', as: 'korisnik'});
    }
  }
  Korpa.init({
    
  }, {
    sequelize,
    modelName: 'Korpa',
  });
  return Korpa;
};