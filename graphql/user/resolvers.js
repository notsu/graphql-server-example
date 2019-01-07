const models = require('./models')
const topicModels = require('../topic/models')
const { Poll: pollModels } = require('../poll/models')
const { Article: articleModels } = require('../article/models')

module.exports = {
  Query: {
    user: async (root, args) => {
      const { id } = args;
      const user = models.findOne({ where: { id } });
      return user;
    },
    users: async () => {
      const users = models.findAll();
      return users
    },
  },
  Mutation: {
    createUser: async (_, { name, position }) => {
      return models.create({ name, position })
    },
  },
  User: {
    polls: async (parent) => {
      const polls = pollModels.findAll({ where: { creatorId: parent.id } })
      return polls
    },
    topics: async (parent) => {
      const topics = topicModels.findAll({ where: { creatorId: parent.id } })
      return topics
    },
    articles: async (parent) => {
      const articles = articleModels.findAll({ where: { authorId: parent.id } })
      return articles
    },
  }
}
