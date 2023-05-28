'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Glumci extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({glumiUFilmu, glumiUSeriji}) {
      // define association here
      this.hasMany(glumiUFilmu, {foreignKey: 'glumacId', as: "glumiufilmu", onDelete:'cascade', hooks:true} )
      this.hasMany(glumiUSeriji, {foreignKey: 'glumacId', as: "glumiuseriji", onDelete:'cascade', hooks:true} )
    }
  }
  Glumci.init({
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
    modelName: 'Glumci',
  });
  return Glumci;
};