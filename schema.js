const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    Tweet(id: ID!): Tweet
    Tweets(limit: Int): [Tweet]
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
    Author: User
    Stats: Stat
  }

  type User {
    id: ID!
    username: String
    first_name: String
    last_name: String
    avatar_url: String
  }

  type Stat {
    views: Int
    likes: Int
    retweets: Int
  }
`;
