const {gql} = require('apollo-server');

const typeDefs = gql`
  # Schema definitions go here

  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    modulesCount: Int
  }
  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;
module.exports = typeDefs;