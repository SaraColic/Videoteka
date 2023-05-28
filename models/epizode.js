'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Epizode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Komentari, Sezone}) {
      // define association here
      this.hasMany(Komentari, {foreignKey: 'epizodaId', as: "komentari", onDelete:'cascade', hooks:true} )
      this.belongsTo(Sezone, {foreignKey: 'sezonaId', as: 'sezona'});
    }
  }
  Epizode.init({
    naziv: {
      type: DataTypes.STRING,
      allowNull: false
    },
    opis: DataTypes.STRING(10000),
    img: {type: DataTypes.STRING},
    video: {
      type: DataTypes.STRING(4000),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Epizode',
  });
  return Epizode;
};