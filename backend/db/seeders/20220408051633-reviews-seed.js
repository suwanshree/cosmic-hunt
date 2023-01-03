"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Reviews";
    return queryInterface.bulkInsert(
      options,
      [
        {
          userId: 2,
          productId: 20,
          title: "This is amazing",
          review:
            "Cannot believe I did not find this sooner, what an amazing peice of engineering, truly a marvel to wonder upon in the verse.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          productId: 19,
          title: "My spacefaring dreams are now true!",
          review:
            "I just want to say that the capability of this product is beyond comprehension, it is amazing how such a peice of technology exits.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          productId: 18,
          title: "5 Stars",
          review:
            "I am a very happy I decided to try out this product, has worked wonders for me! I am sure most would agree.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          productId: 17,
          title: "I have seen better products",
          review:
            "Very dissapointed, I had am never doing business with this organization again, does the job only half the way.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          productId: 16,
          title: "Satisfied Customer",
          review:
            "I am a very happy I finally decided to buy this. Should have made the decision sooner as I have been missing out big time.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          productId: 15,
          title: "Exactly what I needed",
          review:
            "This is exaclty what I was looking for! I have been searching for something like for a very long time, should have looked up this website sooner.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          productId: 14,
          title: "Works as described",
          review:
            "Product works very well and exactly as described, it is hard to find such a wonder in the market nowadays. Get it while stocks last!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          productId: 13,
          title: "Instructions could be more clear",
          review:
            "This is very stupid, the instructions do not help in the use of the product at all! Why would someone even include that in the manual. I am returning this.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          productId: 12,
          title: "It is okay",
          review:
            "I was expecting much more as per the hype around this but was a bit dissapointed. I guess it does the job, but barely, there just aren't any alternatives so we are stuck with this I guess.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          productId: 11,
          title: "Not satisfied",
          review:
            "I hoped this would work like the product I had long time ago but this does not even come close to the efficiency, will definitely contact support for a refund.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          productId: 10,
          title: "What I was looking for!",
          review:
            "I could not be more happy! Exactly what I was looking for, my time in space will be much better now that I have this product. 5 star all round!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          productId: 9,
          title: "Good product",
          review:
            "This is a very good product, I will be returning again for more products from this company as I am sure their engineering is on point.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          productId: 8,
          title: "Average at best",
          review:
            "Not Good not Bad, kinda does the job so I guess it just comes off as average. Will look into similar products the next time I need anything like this.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          productId: 7,
          title: "The best out there",
          review:
            "Anyone in search for a similar product can just stop and go ahead and contact the producers here, period. No other product comes even close to matching this.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          productId: 20,
          title: "This is IT!",
          review:
            "This is definitely IT!! What an amazing product, I am simply amazed and my mind has been blown to see this work so so well.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          productId: 19,
          title: "Works perfectly",
          review:
            "This works very well, I thought it would be average at best but this far surpassed my expectaions and I will be returning for more soon!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          productId: 18,
          title: "I keep buying more and more",
          review:
            "Someone help me! This is so good I cannot stop buying more and more everytime! What an amazing piece of work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          productId: 17,
          title: "A very satisfied customer",
          review:
            "I am a very satisfied customer, this is simply the best and I cannot believe I did not find this sooner for all my spacefaring needs.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          productId: 16,
          title: "Better than advertised",
          review:
            "Only once in a while a product comes along that works better than advertised. This is definitely one of those gems.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          productId: 15,
          title: "Not what I expected",
          review:
            "This is not at all what I expected from the producers, since their last product was so good I was hoping for something similar but I am dissapointed.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          productId: 14,
          title: "4 Stars at best",
          review:
            "This is just a final polish from being a perfect product, I am sad that they rushed this to market in an almost complete state.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          productId: 13,
          title: "Producers read my mind",
          review:
            "This. I have been looking for something like this for a long time, when this came along, its almost as if the producers read my mind! Thank you!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          productId: 12,
          title: "Power usage too high",
          review:
            "Works perfectly but I was hoping the power useage to be moderate or high at the most but this is definitely bordering on very high!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          productId: 11,
          title: "It. Is. Beautiful.",
          review: "I have no words. This is just beautiful.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          productId: 10,
          title: "Very Secure",
          review:
            "I feel much more safe now that I have this installed in my establishment, should have went for something like this much sooner.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = "Reviews";
    return queryInterface.bulkDelete(options, null, {});
  },
};
