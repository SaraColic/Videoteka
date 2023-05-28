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
     static associate({Direktor, Zanrovi, Sezone, glumiUSeriji, Iznajmljeni, Korpa}) {
      this.belongsTo(Direktor, {foreignKey: 'direktorId', as: 'direktor'});
      this.belongsTo(Zanrovi, {foreignKey: 'zanrId', as: 'zanr'});
      this.hasMany(Sezone, {foreignKey: 'serijaId', as: "sezone", onDelete:'cascade', hooks:true} )
      this.hasMany(glumiUSeriji, {foreignKey: 'serijaId', as: "glumiuseriji", onDelete:'cascade', hooks:true} )
      this.hasMany(Iznajmljeni, {foreignKey: 'serijaId', as: "iznajmljeni", onDelete:'cascade', hooks:true} )
      this.hasMany(Korpa, {foreignKey: 'serijaId', as: "korpa", onDelete:'cascade', hooks:true} );
      // define association here
    }
  }
  Serije.init({
    naziv: {
      type: DataTypes.STRING,
      allowNull: false
    },
    opis: DataTypes.STRING(10000),
    tip: {type: DataTypes.STRING},
    godina: {type: DataTypes.STRING},
    ocena: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min:0,
        max:10
      }
    },
    img: {type: DataTypes.STRING},
    cena:{
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
       min:0
      }
   },
   besplatan: {
     type: DataTypes.BOOLEAN,
     defaultValue: false
   }
  },
   {
    sequelize,
    modelName: 'Serije',
  });
  return Serije;
};