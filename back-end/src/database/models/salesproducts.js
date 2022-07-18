'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class salesProducts extends Model {}

  salesProducts.init({
    saleId: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    productId: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'SaleProduct',
    tableName: 'salesProducts',
    underscored: true,
    timestamps: false,
  });

  salesProducts.associations = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'sales',
      foreignKey: 'saleId',
      through: salesProducts,
    })

    models.Product.belongsToMany(models.Sale, {
      as: 'products',
      foreignKey: 'productId',
      through: salesProducts,
    })
  }

  return salesProducts;
};