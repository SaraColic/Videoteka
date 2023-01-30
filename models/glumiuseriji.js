'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class glumiUSeriji extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(Serije, {foreignKey: 'serijaId', as: "serija"} )
      this.belongsTo(Glumci, {foreignKey: 'glumacId', as: 'glumac'} )
    }
  }
  glumiUSeriji.init({
    serijaID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    glumacID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'glumiUSeriji',
  });
  return glumiUSeriji;
};