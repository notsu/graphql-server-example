"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "polls",
      [
        {
          title: "Which department of LINE Thailand is the most awesome?",
          creatorId: 1
        },
        {
          title: "Hotdog or not hotdog?",
          creatorId: 1
        },
        {
          title: "Next topic's title?",
          creatorId: 2
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("polls", null, {});
  }
};
