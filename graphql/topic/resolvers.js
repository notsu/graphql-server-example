const models = require("./models");
const userModels = require("../user/models");

module.exports = {
  Query: {
    topic: async (root, args) => {
      const { id } = args;
      const topic = models.findOne({ where: { id } });
      return topic;
    },
    topics: async () => {
      const topics = models.findAll();
      return topics;
    }
  },
  Mutation: {
    createTopic: async (_, { title, creatorId }) => {
      return models.create({ title, creatorId });
    }
  },
  Topic: {
    creator: async (parent) => {
      const creator = userModels.findOne({ where: { id: parent.creatorId }});
      return creator
    }
  }
};
