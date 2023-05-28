'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Filmovi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Direktor, Zanrovi, Komentari, Iznajmljeni, glumiUFilmu, Korpa}) {
      this.belongsTo(Direktor, {foreignKey: 'direktorId', as: 'direktor'});
      this.belongsTo(Zanrovi, {foreignKey: 'zanrId', as: 'zanr'});
      this.hasMany(Komentari, {foreignKey: 'filmId', as: "komentari", onDelete:'cascade', hooks:true} );
      this.hasMany(Iznajmljeni, {foreignKey: 'filmId', as: "iznajmljeni", onDelete:'cascade', hooks:true} );
      this.hasMany(glumiUFilmu, {foreignKey: 'filmId', as: "glumiufilmu", onDelete:'cascade', hooks:true} );
      this.hasMany(Korpa, {foreignKey: 'filmId', as: "korpa", onDelete:'cascade', hooks:true} );
      // define association here
    }
  }
  Filmovi.init({
    naziv: {
      type: DataTypes.STRING,
      allowNull: false
    },
    opis: DataTypes.STRING(10000),
    tip: {type: DataTypes.STRING},
    video: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ocena: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min:0,
        max:10
      }
    },
    img: {type: DataTypes.STRING},
    trajanje: {type: DataTypes.STRING},
    godina: {type: DataTypes.STRING},
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
  }, {
    sequelize,
    modelName: 'Filmovi',
  });
  return Filmovi;
};