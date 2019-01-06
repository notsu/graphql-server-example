const Sequelize = require('sequelize');
const postgres = require('../../connectors/postgres');

const Topic = postgres.define("topics", {
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

module.exports = Topic;
