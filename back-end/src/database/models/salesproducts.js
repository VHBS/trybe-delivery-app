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
      references: {
        model: 'sales',
        key: 'id'
      }
    },
    productId: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id'
      }
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

  salesProducts.associate = (models) => {
    models.Sale.belongsToMany(
      models.Product,
      {
        as: 'products',
        through: salesProducts,
        foreignKey: 'saleId',
        otherKey: 'productId',
      }
    )

    models.Product.belongsToMany(
      models.Sale,
      {
        as: 'sales',
        through: salesProducts,
        foreignKey: 'productId',
        otherKey: 'saleId',
      }
    )
  }

  return salesProducts;
};