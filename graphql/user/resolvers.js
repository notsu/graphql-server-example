const models = require('./models')

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
}
