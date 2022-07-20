'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sales extends Model {}

  sales.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(9, 2)
    },
    deliveryAddress: {
      allowNull: false,
      type: DataTypes.STRING
    },
    deliveryNumber: {
      allowNull: false,
      type: DataTypes.STRING
    },
    saleDate: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Sale',
    tableName: 'sales',
    underscored: true,
    timestamps: false,
  });

  sales.associate = (models) => {
    sales.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    sales.belongsTo(models.User, {
      foreignKey: 'sellerId',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  }

  return sales;
};
