"use strict";
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Users";
    return queryInterface.bulkInsert(
      options,
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
        {
          email: "solo@jedi.gov",
          username: "hanSolo",
          hashedPassword: bcrypt.hashSync("password1234"),
        },
        {
          email: "vader@empire.gg",
          username: "darthVader",
          hashedPassword: bcrypt.hashSync("password1234"),
        },
        {
          email: "walker@jedi.gov",
          username: "lukeSkywalker",
          hashedPassword: bcrypt.hashSync("password1234"),
        },
        {
          email: "kirk@federation.gov",
          username: "jamesTkirk",
          hashedPassword: bcrypt.hashSync("password1234"),
        },
        {
          email: "spock@federation.gov",
          username: "spock",
          hashedPassword: bcrypt.hashSync("password1234"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    options.tableName = "Users";
    return queryInterface.bulkDelete(
      options,
      {
        username: { [Op.in]: ["demo-user", "suwan"] },
      },
      {}
    );
  },
};
