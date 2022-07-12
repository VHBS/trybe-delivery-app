'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {}

  products.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      allowNull: false,
      type: Sequelize.DECIMAL(4, 2)
    },
    urlImage: {
      allowNull: false,
      type: Sequelize.STRING,
    }
  }, {
    sequelize,
    modelName: 'products',
    underscored: true,
    timestamps: false,
  });
  return products;
};