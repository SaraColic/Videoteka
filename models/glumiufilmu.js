'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class glumiUFilmu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Filmovi, Glumci}) {
      // define association here
      this.belongsTo(Filmovi, {foreignKey: 'filmId', as: "filmovi"} )
      this.belongsTo(Glumci, {foreignKey: 'glumacId', as: 'glumac'} )
    }
  }
  glumiUFilmu.init({
    filmID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    glumacID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'glumiUFilmu',
  });
  return glumiUFilmu;
};