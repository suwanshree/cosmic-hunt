"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "demo-user",
          hashedPassword: bcrypt.hashSync("password1234"),
        },
        {
          email: "suwan@user.io",
          username: "suwan",
          hashedPassword: bcrypt.hashSync("password1234"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["demo-user", "suwan"] },
      },
      {}
    );
  },
};
