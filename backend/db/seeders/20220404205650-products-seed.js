"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Products";
    return queryInterface.bulkInsert(
      options,
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
          ownerId: 3,
          title: "Warp Drive",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/51965fafe4b0c4d402cd8a5b/1614994937449-F2GDPE96NMWU1ZHYH3JG/warp_ship.jpg",
          description:
            "A warp drive is a spacecraft propulsion system only equipable by large spacecrafts. A spacecraft equipped with a warp drive may travel at speeds greater than that of light by many orders of magnitude. In contrast to some other faster-than-light technologies such as a jump drive, the warp drive does not permit instantaneous travel and transfers between two points, but rather involves a measurable passage of time which is pertinent to the concept.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          title: "Arc Emitter",
          imageUrl:
            "https://static.wikia.nocookie.net/starwars/images/7/75/Arc_Emitter.png",
          description:
            "The Arc Emitter is a device build by Anomid engineers on Hoth for the White Maw pirates during the Galactic War. The device was capable of disabling any equipment running off a generator, which posed a danger for the Galactic Republic forces. Corporal Fabel enlisted a Republic operative to steal an Anomid diagnostic pad and recalibrate it to make the Arc Emitter target itself in order to destroy it.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 1,
          title: "Comlink Booster Pack",
          imageUrl: "https://i.imgur.com/AbXlT9q.jpg",
          description:
            "A comlink booster pack is a piece of technology worn on the backsides of most B1-series battle droids. It varied in design and usage for various battle droids, with differences between B1 droid sub-models, the droids' military position and affiliation, as well as specific groups of droids.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 3,
          title: "DataGrip",
          imageUrl:
            "https://static.wikia.nocookie.net/starwars/images/8/8b/Datagrip.png",
          description:
            "A DataGrip is a wrist gauntlet that allowed the wearer to track their health, receive transmissions, scan objects and provide orientation when the user was lost. A droid repair technician was known to wear a DataGrip as part of his job[1] around 34 ABY.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          title: "Flash Charge",
          imageUrl:
            "https://lumiere-a.akamaihd.net/v1/images/flash-charge-main_819dc187.jpeg?region=164%2C0%2C953%2C536",
          description:
            "A flash charge is a device that, when activated, created a brief but intense blinding light, making it useful against enemies using weapon scopes. Din Djarin and Toro Calican used flash charges to help capture Fennec Shand on Tatooine in 9 ABY. One flash charge was later used by the Mandalorian to distract Calican after he betrayed him and held Grogu hostage.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 1,
          title: "Gray Noise Generator",
          imageUrl:
            "https://1.bp.blogspot.com/-NGWjR7f09N8/XvdKb94lHDI/AAAAAAAABcU/NpJh7i40q7QFgJsY3iGA4nWfeQHs3auugCLcBGAsYHQ/s1600/Sci-fi.jpg",
          description:
            "Gray noise generator is a device which produces gray noise. The Galactic Empire used the devices to mask the sound of large machines during covert operations. The noise pulses produced were intensely painful to Sullustans but were not audible to all species.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 3,
          title: "Hovering Pram",
          imageUrl:
            "https://static.wikia.nocookie.net/starwars/images/2/24/TheChildPod-Fathead.png",
          description:
            "A hovering pram is a hovering device used to carry Grogu. Din Djarin found it carrying Grogu on Arvala-7 and continued to use it to transport Grogu until handing him over to the Client. When Djarin returned to rescue Grogu, he found the capsule discarded in a dumpster.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          title: "Lightsaber Incinerator",
          imageUrl:
            "https://preview.redd.it/w28yr1awj6941.jpg?auto=webp&s=066258c4978107de81d33fbb592964eb28ecc548",
          description:
            "The Lightsaber Incinerator is a spherical pod-like machine capable of producing temperatures that can melt lightsabers and cause the Kyber crystals within them to violently explode. The incinerator emits a beam of energy capable of knocking down those nearby from the dying crystals.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 1,
          title: "Mark IV Locomotion System",
          imageUrl:
            "https://hard-drive.net/wp-content/uploads/2021/02/New-Project-3-3.png",
          description:
            "The Mark IV Locomotion System is a locomotion system produced by the company Everett. The R2 series astromech droid R2-D2 was equipped with an Everett Mark IV Locomotion System.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 3,
          title: "Meson Taloscope",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/50075c3b84aef6ab9ccf751e/1361940083582-65LEWOF9ONVHN2BAKXGD/IMG_0062.jpg?format=1000w",
          description:
            "Meson taloscope is a type of analytical equipment that could be used to measure the number of Midi-chlorians in an individual's blood. The Naboo Royal Starship was equipped with state of the art meson taloscopes, and in 32 BBY the Jedi Padawan Obi-Wan Kenobi used one of the vessel's taloscopes to analyze the blood of young Anakin Skywalker.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          title: "PVC-800",
          imageUrl:
            "https://static.wikia.nocookie.net/starwars/images/e/e2/PVC-800.png",
          description:
            "The PVC-800 is a personal vehicle coordinator manufactured by Vewas Data Controllers. It can take control of vehicles to prevent a collision, and provide data readouts projected on the windshield, which included listing whether auto mode was on, the current speed of the vehicle, the current coordinates, the amount of fuel, and the degrees of efficiency, as well as a map.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 1,
          title: "Static Charge Dissipator",
          imageUrl:
            "https://static.wikia.nocookie.net/starwars/images/5/56/Static_charge_dissipator.png",
          description:
            "The static charge dissipator is a device used on the Millennium Falcon to dissipate static charge. While transporting Moebin Faltus to Prahvin, the Falcon was acting up causing Rey to investigate. She discovered that the static charge dissipator was completely burned out and decided that the Falcon needed to make a planetfall for repairs on the planet Choss. Rey and Faltus searched a city for a new static sharge dissipator.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 3,
          title: "Vocal Emulator",
          imageUrl:
            "https://lumiere-a.akamaihd.net/v1/images/databank_vocalemulator_01_169_2ba87603.jpeg?region=0%2C98%2C1560%2C780",
          description:
            "A Vocal emulator is a small device that alters the vocal patterns of its user. It operates through being swallowed, after which it takes up position in the user's throat. One was used to alter Jedi Master Obi-Wan Kenobi's voice to sound like bounty hunter Rako Hardeen's.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          title: "Ultrawave Sight Enhancer",
          imageUrl: "https://cdn.nanalyze.com/uploads/2017/04/esight.jpg",
          description:
            "The Ultrawave Sight Enhancer, also known as an Ultrasonic Sight Enhancer, allows the visually impaired to have a modicum of sight by creating a three-dimensional sonic graph of the wearer's surrounding. The headband has to be surgically implanted and creates a crystal clear black and white image of the environment.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 1,
          title: "Impulse Drive",
          imageUrl:
            "https://www.thoughtco.com/thmb/ii5815Lcwre5YGuygUhVwnGnssw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1024px-Ion_Engine_Test_Firing_-_GPN-2000-000482-58b82ea65f9b588080981f05.jpg",
          description:
            "The impulse drive is the method of propulsion that starships and other spacecraft use when they are travelling below the speed of light. Typically powered by deuterium fusion reactors, impulse engines let ships travel interplanetary distances readily. Unlike the warp engines, impulse engines work on principles used in today's rocketry, throwing mass out the back as fast as possible to drive the ship forward.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 3,
          title: "Universal Translator",
          imageUrl:
            "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/10/Star-Trek-Universal-translator.jpg?q=50&fit=crop&w=943&h=500&dpr=1.5",
          description:
            "A universal translator is a device used to translate between many alien languages. The translator's purpose is to offer an instant translation of any language. As a convention, it is used to remove the problem of translating between alien languages when it is not vital to the plot. Especially in science fiction television, translating a new language in every episode when a new species is encountered would consume time normally allotted for plot development and would potentially become repetitive to the point of annoyance. Occasionally, intelligent alien races are portrayed as being able to extrapolate the rules of English from little speech and rapidly become fluent in it, making the translator unnecessary.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          title: "Rail Gun",
          imageUrl:
            "https://static.wikia.nocookie.net/expanse/images/2/2a/S01E04amunrarailgun17m45s.jpg",
          description:
            "A railgun is a powerful ship-to-ship weapon used by the United Nations Navy (UNN), the Martian Congressional Republic Navy (MCRN), the Outer Planets Alliance (OPA), and Protogen Corporation for space combat. It uses centripetal force to accelerate and charge up ionized particles and launch the projectile at very high speeds. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 1,
          title: "Force-field Generator",
          imageUrl:
            "https://static.wikia.nocookie.net/metroid/images/c/c6/Phendrana_Drifts_Screenshot_%28123%29.png",
          description:
            "A force-field generator is a generator that makes a force field. The force field can be used for various purposes, including security (keeping beings from entering the field) and shielding. Similar to shield generators in many ways except force fields can be very powerful in a confined use space and deadly if tried to tamper with or break through.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = "Products";
    return queryInterface.bulkDelete(options, null, {});
  },
};
