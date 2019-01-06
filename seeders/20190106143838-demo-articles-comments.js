"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "articles_comments",
      [
        {
          body: "Comment 1",
          articleId: 1
        },
        {
          body: "Comment 2",
          articleId: 1
        },
        {
          body: "Are you sure that cats can trained?",
          articleId: 3
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("articles_comments", null, {});
  }
};
