"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("Review", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Products" },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Product, { foreignKey: "productId" });
  };

  Review.writeReview = async function ({ userId, productId, title, review }) {
    const newReview = await Review.create({
      userId,
      productId,
      title,
      review,
    });
    return newReview;
  };

  return Review;
};
