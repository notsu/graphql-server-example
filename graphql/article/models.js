const Sequelize = require("sequelize");
const postgres = require("../../connectors/postgres");

const Article = postgres.define("articles", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: Sequelize.STRING,
  authorId: Sequelize.INTEGER,
}, {
  timestamps: false,
});

const Comment = postgres.define("articles_comments", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  articleId: Sequelize.INTEGER,
  body: Sequelize.STRING,
}, {
  timestamps: false,
});

module.exports = {
  Article,
  Comment,
};
