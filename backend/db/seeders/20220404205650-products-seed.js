"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          ownerId: 2,
          title: "Quantum Drive",
          imageUrl:
            "https://cig-galactapedia-prod.s3.amazonaws.com/upload/8397d8c8-5c00-49af-87d8-3e18ee65f816",
          description:
            "A quantum drive is a type of engine that generates a Chan-Eisen field, enabling spacecraft to travel at approximately 20% of the speed of light. Because it takes a great deal of energy for a quantum drive to work, larger ships with more room for specialized power and cooling devices can remain in quantum travel longer than smaller ships. Quantum drives can be altered with a jump module to become a jump drive capable of traversing interspace.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 1,
          title: "Shield Generator",
          imageUrl:
            "https://www.renderhub.com/zb3d/sci-fi-shield-generator/sci-fi-shield-generator-04.jpg",
          description:
            "A deflector shield generator, or simply called a shield generator or a shield projector, is a device which was used to create a deflector shield, such as a ray shield. Deflector shield generators are used to create protective shields for starships, vehicles, personnel, and droids.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 1,
          title: "Warp Drive",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/51965fafe4b0c4d402cd8a5b/1614994937449-F2GDPE96NMWU1ZHYH3JG/warp_ship.jpg",
          description:
            "A warp drive is a spacecraft propulsion system only equipable by large spacecrafts. A spacecraft equipped with a warp drive may travel at speeds greater than that of light by many orders of magnitude. In contrast to some other faster-than-light technologies such as a jump drive, the warp drive does not permit instantaneous travel and transfers between two points, but rather involves a measurable passage of time which is pertinent to the concept.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
