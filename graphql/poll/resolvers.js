const { Poll: pollModels, Choice: choiceModels } = require("./models");
const userModels = require("../user/models")

module.exports = {
  Query: {
    poll: async (root, args) => {
      const { id } = args;
      const poll = pollModels.findOne({ where: { id } });
      return poll;
    },
    polls: async () => {
      const polls = pollModels.findAll();
      return polls;
    }
  },
  Mutation: {
    createPoll: async (_, { title, creatorId }) => {
      return pollModels.create({ title, creatorId });
    },
    createChoice: async (_, { pollId, title }) => {
      return choiceModels.create({ pollId, title, point: 0 })
    },
    votePoll: async (_, { id, choice: choiceId }) => {
      const choice = choiceModels.findOne({ where: { pollId: id, id: choiceId } })

      if (choice) {
        choice.point += 1
        choice.save()
      }

      return choice
    },
  },
  Poll: {
    choices: async (parent) => {
      const choices = choiceModels.findAll({ where: { pollId: parent.id } })
      return choices
    },
    choice: async (parent, args) => {
      const choice = choiceModels.findOne({ where: { pollId: parent.id, id: args.id } })
      return choice
    },
    creator: async (parent) => {
      const creator = userModels.findOne({ where: { id: parent.creatorId }});
      return creator
    }
  },
};
