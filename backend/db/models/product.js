"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  Product.associate = function (models) {
    Product.belongsTo(models.User, { foreignKey: "ownerId" });
  };
  return Product;
};
