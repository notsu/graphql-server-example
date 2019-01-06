const models = require("./models");

module.exports = {
  Query: {
    poll: async (root, args) => {
      const { id } = args;
      const poll = models.findOne({ id });
      return poll;
    },
    polls: async () => {
      const polls = models.findAll();
      return polls;
    }
  },
  Mutation: {
    createPoll: async ({ title, creatorId }) => {
      return models.create({ title, creator: creatorId });
    }
  }
};
