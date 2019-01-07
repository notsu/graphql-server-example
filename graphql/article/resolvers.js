const { Article: articleModels, Comment: commentModels } = require("./models");
const userModels = require("../user/models")

module.exports = {
  Query: {
    article: async (root, args) => {
      const { id } = args;
      const article = articleModels.findOne({ where: { id } });
      return article;
    },
    articles: async () => {
      const articles = articleModels.findAll();
      return articles;
    }
  },
  Mutation: {
    createArticle: async (_, { title, authorId }) => {
      return articleModels.create({ title, authorId });
    }
  },
  Article: {
    comments: async (parent) => {
      const comments = commentModels.findAll({ where: { articleId: parent.id } })
      return comments
    },
    author: async (parent) => {
      const author = userModels.findOne({ where: { id: parent.authorId }});
      return author
    },
  }
};
