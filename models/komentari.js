'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Komentari extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Filmovi, Epizode, Korisnici}) {
      // define association here
      this.belongsTo(Filmovi, {foreignKey: 'filmId', as: 'film'});
      this.belongsTo(Epizode, {foreignKey: 'epizodaId', as: 'epizoda'});
      this.belongsTo(Korisnici, {foreignKey: 'korisnikId', as: 'korisnik'});
    }
  }
  Komentari.init({
    tekst: {
      type: DataTypes.STRING(5000),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Komentari',
  });
  return Komentari;
};