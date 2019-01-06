'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "topics",
      [
        {
          title: "Discussion about cats",
          creatorId: 1
        },
        {
          title: "Discussion about dragons",
          creatorId: 2
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("topics", null, {});
  }
};
