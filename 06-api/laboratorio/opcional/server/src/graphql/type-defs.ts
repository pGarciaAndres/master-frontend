import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Character {
    id: ID!
    name: String!
    status: String!
    species: String!
    type: String!
    gender: String!
    image: String!
    url: String!
    created: String!
    bestSentences: String
  }

  type Query {
    character(id: ID!): Character!
  }

  input CharacterInput {
    id: ID!
    name: String!
    status: String!
    species: String!
    gender: String!
    bestSentences: String!
  }

  type Mutation {
    saveCharacter(character: CharacterInput!): Boolean
  }
`;
