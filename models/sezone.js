'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sezone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Epizode, Iznajmljeni, Serije}) {
      // define association here
      this.hasMany(Epizode, {foreignKey: 'sezonaId', as: "epizode", onDelete:'cascade', hooks:true} )
      this.belongsTo(Serije, {foreignKey: 'serijaId', as: 'serija'});
      this.hasMany(Iznajmljeni, {foreignKey: 'sezonaId', as: "iznajmljeni", onDelete:'cascade', hooks:true} )
    }
  }
  Sezone.init({
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
    cena:{
       type: DataTypes.INTEGER,
       allowNull: true,
       validate: {
        min:0
       }
    },
  }, {
    sequelize,
    modelName: 'Sezone',
  });
  return Sezone;
};