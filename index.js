const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema.js");
const { Query } = require("./resolvers/Query");
const { User } = require("./resolvers/User");
const { db } = require("./db.js");

const resolvers = {
  Query,
  User,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db,
  },
});

server.listen().then(({ url }) => {
  console.log("Server is running at " + url);
});
