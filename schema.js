const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    tweets(filter: tweetsFilter): [Tweet]
    tweet(id: ID!): Tweet
    user(id: ID!): User
  }

  type Mutation {
    createTweet(body: String): Tweet
    deleteTweet(id: ID!): Tweet
    markTweetRead(id: ID!): Boolean
  }

  type Tweet {
    id: ID!
    body: String
    date: String
    user: User
    Stats: Stat
  }

  type User {
    id: ID!
    username: String
    first_name: String
    last_name: String
    avatar_url: String
    tweets: [Tweet]
  }

  type Stat {
    views: Int
    likes: Int
    retweets: Int
  }

  input tweetsFilter {
    limit: Int
  }
`;
