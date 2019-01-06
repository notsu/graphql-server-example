const path = require('path')
const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas')

const typesArray = fileLoader(path.join(__dirname, '**/types.gql'))
const resolversArray = fileLoader(path.join(__dirname, '**/resolvers.js'))

module.exports = {
  typeDefs: mergeTypes(typesArray),
  resolvers: mergeResolvers(resolversArray)
};
