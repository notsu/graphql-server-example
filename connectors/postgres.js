const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    port: process.env.POSTGRES_PORT,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

    operatorsAliases: false
  }
);

module.exports = sequelize;
