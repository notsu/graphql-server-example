const Sequelize = require("sequelize");
const postgres = require("../../connectors/postgres");

const Poll = postgres.define("polls", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: Sequelize.STRING,
  creatorId: Sequelize.INTEGER,
}, {
  timestamps: false,
});

const Choice = postgres.define("polls_choices", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: Sequelize.STRING,
  point: Sequelize.INTEGER,
}, {
  timestamps: false,
});

module.exports = {
  Poll,
  Choice,
};
