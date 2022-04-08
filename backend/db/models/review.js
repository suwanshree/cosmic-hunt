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
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Product, { foreignKey: "productId" });
  };

  Review.writeReview = async function ({ userId, productId, review }) {
    const newReview = await Review.create({
      userId,
      productId,
      review,
    });
    return newReview;
  };

  return Review;
};
