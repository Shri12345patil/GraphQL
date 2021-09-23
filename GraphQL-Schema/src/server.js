//  run : src/server.js 
// const { ApolloServer } = require("apollo-server");
// const typeDefs = require("./schema");
// const resolvers = require("./resolvers");
// const server = new ApolloServer({ typeDefs, resolvers });

// server.listen().then(() => {
//   console.log(`Server is running on http://localhost:4000`);
// });
// there are two way by use graphqlserver and appoloserver

const { GraphQLServer } = require('graphql-yoga')
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
  console.log(`Server is running on http://localhost:4000`);
});