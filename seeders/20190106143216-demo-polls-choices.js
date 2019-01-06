"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "polls_choices",
      [
        {
          title: "LINE MAN",
          point: 0,
          pollId: 1
        },
        {
          title: "Business Product",
          point: 0,
          pollId: 1
        },
        {
          title: "QA",
          point: 0,
          pollId: 1
        },
        {
          title: "Developer Relations",
          point: 0,
          pollId: 1
        },
        {
          title: "E-Commerce",
          point: 0,
          pollId: 1
        },
        {
          title: "Data Scientist",
          point: 0,
          pollId: 1
        },
        {
          title: "Hardware",
          point: 0,
          pollId: 1
        },
        {
          title: "DevOps",
          point: 0,
          pollId: 1
        },
        {
          title: "Hotdog!",
          point: 0,
          pollId: 2
        },
        {
          title: "Not Hotdog!",
          point: 0,
          pollId: 2
        },
        {
          title: "GraphQL for Node.js!",
          point: 0,
          pollId: 3
        },
        {
          title: "GraphQL for Golang!",
          point: 0,
          pollId: 3
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("polls_choices", null, {});
  }
};
