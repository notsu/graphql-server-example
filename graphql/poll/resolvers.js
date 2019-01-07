const { Poll: pollModels, Choice: choiceModels } = require("./models");
const userModels = require("../user/models")
const pubsub = require("../../connectors/pubsub")

const CHOICE_VOTED = "CHOICE_VOTED";

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
      return choiceModels.create({ pollId, title, point: 0 });
    },
    votePoll: async (_, { id, choice: choiceId }) => {
      const choice = await choiceModels.findOne({
        where: { pollId: id, id: choiceId }
      });

      if (choice) {
        choice.point += 1;
        choice.save();

        const poll = await pollModels.findOne({ where: { id }, raw: true });
        poll.choices = await choiceModels.findAll({
          where: { pollId: id },
          order: [["point", "DESC"]],
          raw: true
        });
        pubsub.publish(CHOICE_VOTED, { pollVoted: poll });
      }

      return choice;
    }
  },
  Subscription: {
    pollVoted: {
      subscribe: () => pubsub.asyncIterator([CHOICE_VOTED])
    }
  },
  Poll: {
    choices: async parent => {
      const choices = choiceModels.findAll({ where: { pollId: parent.id } });
      return choices;
    },
    choice: async (parent, args) => {
      const choice = choiceModels.findOne({
        where: { pollId: parent.id, id: args.id }
      });
      return choice;
    },
    creator: async parent => {
      const creator = userModels.findOne({ where: { id: parent.creatorId } });
      return creator;
    }
  }
};
