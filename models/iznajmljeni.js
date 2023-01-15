'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Iznajmljeni extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Filmovi, Sezone, Korisnici}) {
      // define association here
      this.belongsTo(Filmovi, {foreignKey: 'filmId', as: 'film'});
      this.belongsTo(Sezone, {foreignKey: 'sezonaId', as: 'epizoda'});
      this.belongsTo(Korisnici, {foreignKey: 'korisnikId', as: 'korisnik'});
    }
  }
  Iznajmljeni.init({
    datumIsteka: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Iznajmljeni',
  });
  return Iznajmljeni;
};