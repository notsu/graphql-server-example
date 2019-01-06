const models = require("./models");

module.exports = {
  Query: {
    article: async (root, args) => {
      const { id } = args;
      const article = models.findOne({ id });
      return article;
    },
    articles: async () => {
      const articles = models.findAll();
      return articles;
    }
  },
  Mutation: {
    createArticle: async ({ title, authorId }) => {
      return models.create({ title, author: authorId });
    }
  }
};
