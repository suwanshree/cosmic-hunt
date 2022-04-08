"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 1,
          productId: 20,
          title: "This is amazing",
          review:
            "Cannot believe I did not find this sooner, what an amazing peice of engineering, truly a marvel to wonder upon in the verse.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          productId: 10,
          title: "My spacefaring dreams are now true!",
          review:
            "I just want to say that the capability of this product is beyond comprehension, it is amazing how such a peice of technology exits.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          productId: 19,
          title: "5 Stars",
          review:
            "I am a very happy I decided to try out this product, has worked wonders for me! I am sure most would agree.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          productId: 4,
          title: "I have seen better products",
          review:
            "Very dissapointed, I had am never doing business with this organization again, does the job only half the way.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
