const Sequelize = require('sequelize');
const postgres = require('../../connectors/postgres');

const User = postgres.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  position: Sequelize.STRING,
}, {
  timestamps: false,
});

module.exports = User
