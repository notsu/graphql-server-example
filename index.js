const { ApolloServer, gql } = require("apollo-server");
const { resolvers, typeDefs } = require("./graphql/schema")
const depthLimit = require("graphql-depth-limit");
const { createComplexityLimitRule } = require("graphql-validation-complexity");

const LIMIT_QUERY_DEPT = 10
const LIMIT_QUERY_COMPLEXITY = 5000
const PORT = 3000

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [
    depthLimit(LIMIT_QUERY_DEPT),
    createComplexityLimitRule(LIMIT_QUERY_COMPLEXITY)
  ],
  tracing: true,
  playground: true,
  debug: true,
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
