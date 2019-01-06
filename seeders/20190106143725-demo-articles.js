"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "articles",
      [
        {
          title: "Hello 1",
          authorId: 1
        },
        {
          title: "Hello 2",
          authorId: 1
        },
        {
          title: "How to train your cats",
          authorId: 2
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("articles", null, {});
  }
};
